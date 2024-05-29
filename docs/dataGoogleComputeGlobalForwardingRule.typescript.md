# `dataGoogleComputeGlobalForwardingRule` Submodule <a name="`dataGoogleComputeGlobalForwardingRule` Submodule" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleComputeGlobalForwardingRule <a name="DataGoogleComputeGlobalForwardingRule" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/data-sources/compute_global_forwarding_rule google_compute_global_forwarding_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.Initializer"></a>

```typescript
import { dataGoogleComputeGlobalForwardingRule } from '@cdktf/provider-google'

new dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule(scope: Construct, id: string, config: DataGoogleComputeGlobalForwardingRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleConfig">DataGoogleComputeGlobalForwardingRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleConfig">DataGoogleComputeGlobalForwardingRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.resetProject"></a>

```typescript
public resetProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleComputeGlobalForwardingRule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.isConstruct"></a>

```typescript
import { dataGoogleComputeGlobalForwardingRule } from '@cdktf/provider-google'

dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.isTerraformElement"></a>

```typescript
import { dataGoogleComputeGlobalForwardingRule } from '@cdktf/provider-google'

dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.isTerraformDataSource"></a>

```typescript
import { dataGoogleComputeGlobalForwardingRule } from '@cdktf/provider-google'

dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.generateConfigForImport"></a>

```typescript
import { dataGoogleComputeGlobalForwardingRule } from '@cdktf/provider-google'

dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataGoogleComputeGlobalForwardingRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleComputeGlobalForwardingRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleComputeGlobalForwardingRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/data-sources/compute_global_forwarding_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleComputeGlobalForwardingRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.baseForwardingRule">baseForwardingRule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.ipAddress">ipAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.ipProtocol">ipProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.ipVersion">ipVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.labelFingerprint">labelFingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.labels">labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.loadBalancingScheme">loadBalancingScheme</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.metadataFilters">metadataFilters</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersList">DataGoogleComputeGlobalForwardingRuleMetadataFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.network">network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.noAutomateDnsZone">noAutomateDnsZone</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.portRange">portRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.pscConnectionId">pscConnectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.pscConnectionStatus">pscConnectionStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.selfLink">selfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.serviceDirectoryRegistrations">serviceDirectoryRegistrations</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsList">DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.sourceIpRanges">sourceIpRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.subnetwork">subnetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.target">target</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `baseForwardingRule`<sup>Required</sup> <a name="baseForwardingRule" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.baseForwardingRule"></a>

```typescript
public readonly baseForwardingRule: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

---

##### `ipProtocol`<sup>Required</sup> <a name="ipProtocol" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.ipProtocol"></a>

```typescript
public readonly ipProtocol: string;
```

- *Type:* string

---

##### `ipVersion`<sup>Required</sup> <a name="ipVersion" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.ipVersion"></a>

```typescript
public readonly ipVersion: string;
```

- *Type:* string

---

##### `labelFingerprint`<sup>Required</sup> <a name="labelFingerprint" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.labelFingerprint"></a>

```typescript
public readonly labelFingerprint: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.labels"></a>

```typescript
public readonly labels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `loadBalancingScheme`<sup>Required</sup> <a name="loadBalancingScheme" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.loadBalancingScheme"></a>

```typescript
public readonly loadBalancingScheme: string;
```

- *Type:* string

---

##### `metadataFilters`<sup>Required</sup> <a name="metadataFilters" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.metadataFilters"></a>

```typescript
public readonly metadataFilters: DataGoogleComputeGlobalForwardingRuleMetadataFiltersList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersList">DataGoogleComputeGlobalForwardingRuleMetadataFiltersList</a>

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

---

##### `noAutomateDnsZone`<sup>Required</sup> <a name="noAutomateDnsZone" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.noAutomateDnsZone"></a>

```typescript
public readonly noAutomateDnsZone: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `portRange`<sup>Required</sup> <a name="portRange" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.portRange"></a>

```typescript
public readonly portRange: string;
```

- *Type:* string

---

##### `pscConnectionId`<sup>Required</sup> <a name="pscConnectionId" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.pscConnectionId"></a>

```typescript
public readonly pscConnectionId: string;
```

- *Type:* string

---

##### `pscConnectionStatus`<sup>Required</sup> <a name="pscConnectionStatus" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.pscConnectionStatus"></a>

```typescript
public readonly pscConnectionStatus: string;
```

- *Type:* string

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.selfLink"></a>

```typescript
public readonly selfLink: string;
```

- *Type:* string

---

##### `serviceDirectoryRegistrations`<sup>Required</sup> <a name="serviceDirectoryRegistrations" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.serviceDirectoryRegistrations"></a>

```typescript
public readonly serviceDirectoryRegistrations: DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsList">DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsList</a>

---

##### `sourceIpRanges`<sup>Required</sup> <a name="sourceIpRanges" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.sourceIpRanges"></a>

```typescript
public readonly sourceIpRanges: string[];
```

- *Type:* string[]

---

##### `subnetwork`<sup>Required</sup> <a name="subnetwork" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.subnetwork"></a>

```typescript
public readonly subnetwork: string;
```

- *Type:* string

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleComputeGlobalForwardingRuleConfig <a name="DataGoogleComputeGlobalForwardingRuleConfig" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleConfig.Initializer"></a>

```typescript
import { dataGoogleComputeGlobalForwardingRule } from '@cdktf/provider-google'

const dataGoogleComputeGlobalForwardingRuleConfig: dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleConfig.property.name">name</a></code> | <code>string</code> | Name of the resource; |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/data-sources/compute_global_forwarding_rule#id DataGoogleComputeGlobalForwardingRule#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/data-sources/compute_global_forwarding_rule#project DataGoogleComputeGlobalForwardingRule#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the resource;

provided by the client when the resource is created.
The name must be 1-63 characters long, and comply with
[RFC1035](https://www.ietf.org/rfc/rfc1035.txt).

Specifically, the name must be 1-63 characters long and match the regular
expression '[a-z]([-a-z0-9]*[a-z0-9])?' which means the first
character must be a lowercase letter, and all following characters must
be a dash, lowercase letter, or digit, except the last character, which
cannot be a dash.

For Private Service Connect forwarding rules that forward traffic to Google
APIs, the forwarding rule name must be a 1-20 characters string with
lowercase letters and numbers and must start with a letter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/data-sources/compute_global_forwarding_rule#name DataGoogleComputeGlobalForwardingRule#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/data-sources/compute_global_forwarding_rule#id DataGoogleComputeGlobalForwardingRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/data-sources/compute_global_forwarding_rule#project DataGoogleComputeGlobalForwardingRule#project}.

---

### DataGoogleComputeGlobalForwardingRuleMetadataFilters <a name="DataGoogleComputeGlobalForwardingRuleMetadataFilters" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFilters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFilters.Initializer"></a>

```typescript
import { dataGoogleComputeGlobalForwardingRule } from '@cdktf/provider-google'

const dataGoogleComputeGlobalForwardingRuleMetadataFilters: dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFilters = { ... }
```


### DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabels <a name="DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabels" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabels.Initializer"></a>

```typescript
import { dataGoogleComputeGlobalForwardingRule } from '@cdktf/provider-google'

const dataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabels: dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabels = { ... }
```


### DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrations <a name="DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrations" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrations.Initializer"></a>

```typescript
import { dataGoogleComputeGlobalForwardingRule } from '@cdktf/provider-google'

const dataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrations: dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrations = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList <a name="DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.Initializer"></a>

```typescript
import { dataGoogleComputeGlobalForwardingRule } from '@cdktf/provider-google'

new dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.get"></a>

```typescript
public get(index: number): DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference <a name="DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeGlobalForwardingRule } from '@cdktf/provider-google'

new dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabels">DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabels</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabels;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabels">DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabels</a>

---


### DataGoogleComputeGlobalForwardingRuleMetadataFiltersList <a name="DataGoogleComputeGlobalForwardingRuleMetadataFiltersList" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersList.Initializer"></a>

```typescript
import { dataGoogleComputeGlobalForwardingRule } from '@cdktf/provider-google'

new dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersList.get"></a>

```typescript
public get(index: number): DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference <a name="DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeGlobalForwardingRule } from '@cdktf/provider-google'

new dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.property.filterLabels">filterLabels</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList">DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.property.filterMatchCriteria">filterMatchCriteria</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFilters">DataGoogleComputeGlobalForwardingRuleMetadataFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `filterLabels`<sup>Required</sup> <a name="filterLabels" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.property.filterLabels"></a>

```typescript
public readonly filterLabels: DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList">DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList</a>

---

##### `filterMatchCriteria`<sup>Required</sup> <a name="filterMatchCriteria" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.property.filterMatchCriteria"></a>

```typescript
public readonly filterMatchCriteria: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeGlobalForwardingRuleMetadataFilters;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFilters">DataGoogleComputeGlobalForwardingRuleMetadataFilters</a>

---


### DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsList <a name="DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsList" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsList.Initializer"></a>

```typescript
import { dataGoogleComputeGlobalForwardingRule } from '@cdktf/provider-google'

new dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsList.get"></a>

```typescript
public get(index: number): DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference <a name="DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeGlobalForwardingRule } from '@cdktf/provider-google'

new dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.property.serviceDirectoryRegion">serviceDirectoryRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrations">DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `serviceDirectoryRegion`<sup>Required</sup> <a name="serviceDirectoryRegion" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.property.serviceDirectoryRegion"></a>

```typescript
public readonly serviceDirectoryRegion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrations;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrations">DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrations</a>

---



