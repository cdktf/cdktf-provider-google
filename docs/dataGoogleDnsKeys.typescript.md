# `dataGoogleDnsKeys` Submodule <a name="`dataGoogleDnsKeys` Submodule" id="@cdktf/provider-google.dataGoogleDnsKeys"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleDnsKeys <a name="DataGoogleDnsKeys" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/data-sources/dns_keys google_dns_keys}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.Initializer"></a>

```typescript
import { dataGoogleDnsKeys } from '@cdktf/provider-google'

new dataGoogleDnsKeys.DataGoogleDnsKeys(scope: Construct, id: string, config: DataGoogleDnsKeysConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysConfig">DataGoogleDnsKeysConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysConfig">DataGoogleDnsKeysConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.resetProject"></a>

```typescript
public resetProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleDnsKeys resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.isConstruct"></a>

```typescript
import { dataGoogleDnsKeys } from '@cdktf/provider-google'

dataGoogleDnsKeys.DataGoogleDnsKeys.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.isTerraformElement"></a>

```typescript
import { dataGoogleDnsKeys } from '@cdktf/provider-google'

dataGoogleDnsKeys.DataGoogleDnsKeys.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.isTerraformDataSource"></a>

```typescript
import { dataGoogleDnsKeys } from '@cdktf/provider-google'

dataGoogleDnsKeys.DataGoogleDnsKeys.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.generateConfigForImport"></a>

```typescript
import { dataGoogleDnsKeys } from '@cdktf/provider-google'

dataGoogleDnsKeys.DataGoogleDnsKeys.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataGoogleDnsKeys resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleDnsKeys to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleDnsKeys that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/data-sources/dns_keys#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleDnsKeys to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.property.keySigningKeys">keySigningKeys</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysList">DataGoogleDnsKeysKeySigningKeysList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.property.zoneSigningKeys">zoneSigningKeys</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysList">DataGoogleDnsKeysZoneSigningKeysList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.property.managedZoneInput">managedZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.property.managedZone">managedZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `keySigningKeys`<sup>Required</sup> <a name="keySigningKeys" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.property.keySigningKeys"></a>

```typescript
public readonly keySigningKeys: DataGoogleDnsKeysKeySigningKeysList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysList">DataGoogleDnsKeysKeySigningKeysList</a>

---

##### `zoneSigningKeys`<sup>Required</sup> <a name="zoneSigningKeys" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.property.zoneSigningKeys"></a>

```typescript
public readonly zoneSigningKeys: DataGoogleDnsKeysZoneSigningKeysList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysList">DataGoogleDnsKeysZoneSigningKeysList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `managedZoneInput`<sup>Optional</sup> <a name="managedZoneInput" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.property.managedZoneInput"></a>

```typescript
public readonly managedZoneInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `managedZone`<sup>Required</sup> <a name="managedZone" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.property.managedZone"></a>

```typescript
public readonly managedZone: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeys.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleDnsKeysConfig <a name="DataGoogleDnsKeysConfig" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysConfig.Initializer"></a>

```typescript
import { dataGoogleDnsKeys } from '@cdktf/provider-google'

const dataGoogleDnsKeysConfig: dataGoogleDnsKeys.DataGoogleDnsKeysConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysConfig.property.managedZone">managedZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/data-sources/dns_keys#managed_zone DataGoogleDnsKeys#managed_zone}. |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/data-sources/dns_keys#id DataGoogleDnsKeys#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/data-sources/dns_keys#project DataGoogleDnsKeys#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `managedZone`<sup>Required</sup> <a name="managedZone" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysConfig.property.managedZone"></a>

```typescript
public readonly managedZone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/data-sources/dns_keys#managed_zone DataGoogleDnsKeys#managed_zone}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/data-sources/dns_keys#id DataGoogleDnsKeys#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/data-sources/dns_keys#project DataGoogleDnsKeys#project}.

---

### DataGoogleDnsKeysKeySigningKeys <a name="DataGoogleDnsKeysKeySigningKeys" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeys"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeys.Initializer"></a>

```typescript
import { dataGoogleDnsKeys } from '@cdktf/provider-google'

const dataGoogleDnsKeysKeySigningKeys: dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeys = { ... }
```


### DataGoogleDnsKeysKeySigningKeysDigests <a name="DataGoogleDnsKeysKeySigningKeysDigests" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigests"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigests.Initializer"></a>

```typescript
import { dataGoogleDnsKeys } from '@cdktf/provider-google'

const dataGoogleDnsKeysKeySigningKeysDigests: dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigests = { ... }
```


### DataGoogleDnsKeysZoneSigningKeys <a name="DataGoogleDnsKeysZoneSigningKeys" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeys"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeys.Initializer"></a>

```typescript
import { dataGoogleDnsKeys } from '@cdktf/provider-google'

const dataGoogleDnsKeysZoneSigningKeys: dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeys = { ... }
```


### DataGoogleDnsKeysZoneSigningKeysDigests <a name="DataGoogleDnsKeysZoneSigningKeysDigests" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigests"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigests.Initializer"></a>

```typescript
import { dataGoogleDnsKeys } from '@cdktf/provider-google'

const dataGoogleDnsKeysZoneSigningKeysDigests: dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigests = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleDnsKeysKeySigningKeysDigestsList <a name="DataGoogleDnsKeysKeySigningKeysDigestsList" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsList.Initializer"></a>

```typescript
import { dataGoogleDnsKeys } from '@cdktf/provider-google'

new dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsList.get"></a>

```typescript
public get(index: number): DataGoogleDnsKeysKeySigningKeysDigestsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleDnsKeysKeySigningKeysDigestsOutputReference <a name="DataGoogleDnsKeysKeySigningKeysDigestsOutputReference" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsOutputReference.Initializer"></a>

```typescript
import { dataGoogleDnsKeys } from '@cdktf/provider-google'

new dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsOutputReference.property.digest">digest</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigests">DataGoogleDnsKeysKeySigningKeysDigests</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `digest`<sup>Required</sup> <a name="digest" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsOutputReference.property.digest"></a>

```typescript
public readonly digest: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleDnsKeysKeySigningKeysDigests;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigests">DataGoogleDnsKeysKeySigningKeysDigests</a>

---


### DataGoogleDnsKeysKeySigningKeysList <a name="DataGoogleDnsKeysKeySigningKeysList" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysList.Initializer"></a>

```typescript
import { dataGoogleDnsKeys } from '@cdktf/provider-google'

new dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysList.get"></a>

```typescript
public get(index: number): DataGoogleDnsKeysKeySigningKeysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleDnsKeysKeySigningKeysOutputReference <a name="DataGoogleDnsKeysKeySigningKeysOutputReference" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.Initializer"></a>

```typescript
import { dataGoogleDnsKeys } from '@cdktf/provider-google'

new dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.property.algorithm">algorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.property.creationTime">creationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.property.digests">digests</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsList">DataGoogleDnsKeysKeySigningKeysDigestsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.property.dsRecord">dsRecord</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.property.isActive">isActive</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.property.keyLength">keyLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.property.keyTag">keyTag</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.property.publicKey">publicKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeys">DataGoogleDnsKeysKeySigningKeys</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.property.algorithm"></a>

```typescript
public readonly algorithm: string;
```

- *Type:* string

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.property.creationTime"></a>

```typescript
public readonly creationTime: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `digests`<sup>Required</sup> <a name="digests" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.property.digests"></a>

```typescript
public readonly digests: DataGoogleDnsKeysKeySigningKeysDigestsList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysDigestsList">DataGoogleDnsKeysKeySigningKeysDigestsList</a>

---

##### `dsRecord`<sup>Required</sup> <a name="dsRecord" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.property.dsRecord"></a>

```typescript
public readonly dsRecord: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isActive`<sup>Required</sup> <a name="isActive" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.property.isActive"></a>

```typescript
public readonly isActive: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `keyLength`<sup>Required</sup> <a name="keyLength" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.property.keyLength"></a>

```typescript
public readonly keyLength: number;
```

- *Type:* number

---

##### `keyTag`<sup>Required</sup> <a name="keyTag" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.property.keyTag"></a>

```typescript
public readonly keyTag: number;
```

- *Type:* number

---

##### `publicKey`<sup>Required</sup> <a name="publicKey" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.property.publicKey"></a>

```typescript
public readonly publicKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeysOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleDnsKeysKeySigningKeys;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysKeySigningKeys">DataGoogleDnsKeysKeySigningKeys</a>

---


### DataGoogleDnsKeysZoneSigningKeysDigestsList <a name="DataGoogleDnsKeysZoneSigningKeysDigestsList" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsList.Initializer"></a>

```typescript
import { dataGoogleDnsKeys } from '@cdktf/provider-google'

new dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsList.get"></a>

```typescript
public get(index: number): DataGoogleDnsKeysZoneSigningKeysDigestsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleDnsKeysZoneSigningKeysDigestsOutputReference <a name="DataGoogleDnsKeysZoneSigningKeysDigestsOutputReference" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsOutputReference.Initializer"></a>

```typescript
import { dataGoogleDnsKeys } from '@cdktf/provider-google'

new dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsOutputReference.property.digest">digest</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigests">DataGoogleDnsKeysZoneSigningKeysDigests</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `digest`<sup>Required</sup> <a name="digest" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsOutputReference.property.digest"></a>

```typescript
public readonly digest: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleDnsKeysZoneSigningKeysDigests;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigests">DataGoogleDnsKeysZoneSigningKeysDigests</a>

---


### DataGoogleDnsKeysZoneSigningKeysList <a name="DataGoogleDnsKeysZoneSigningKeysList" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysList.Initializer"></a>

```typescript
import { dataGoogleDnsKeys } from '@cdktf/provider-google'

new dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysList.get"></a>

```typescript
public get(index: number): DataGoogleDnsKeysZoneSigningKeysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleDnsKeysZoneSigningKeysOutputReference <a name="DataGoogleDnsKeysZoneSigningKeysOutputReference" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.Initializer"></a>

```typescript
import { dataGoogleDnsKeys } from '@cdktf/provider-google'

new dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.property.algorithm">algorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.property.creationTime">creationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.property.digests">digests</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsList">DataGoogleDnsKeysZoneSigningKeysDigestsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.property.isActive">isActive</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.property.keyLength">keyLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.property.keyTag">keyTag</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.property.publicKey">publicKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeys">DataGoogleDnsKeysZoneSigningKeys</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.property.algorithm"></a>

```typescript
public readonly algorithm: string;
```

- *Type:* string

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.property.creationTime"></a>

```typescript
public readonly creationTime: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `digests`<sup>Required</sup> <a name="digests" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.property.digests"></a>

```typescript
public readonly digests: DataGoogleDnsKeysZoneSigningKeysDigestsList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysDigestsList">DataGoogleDnsKeysZoneSigningKeysDigestsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isActive`<sup>Required</sup> <a name="isActive" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.property.isActive"></a>

```typescript
public readonly isActive: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `keyLength`<sup>Required</sup> <a name="keyLength" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.property.keyLength"></a>

```typescript
public readonly keyLength: number;
```

- *Type:* number

---

##### `keyTag`<sup>Required</sup> <a name="keyTag" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.property.keyTag"></a>

```typescript
public readonly keyTag: number;
```

- *Type:* number

---

##### `publicKey`<sup>Required</sup> <a name="publicKey" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.property.publicKey"></a>

```typescript
public readonly publicKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeysOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleDnsKeysZoneSigningKeys;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleDnsKeys.DataGoogleDnsKeysZoneSigningKeys">DataGoogleDnsKeysZoneSigningKeys</a>

---



