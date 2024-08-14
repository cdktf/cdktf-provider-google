# `dataGoogleVmwareengineExternalAccessRule` Submodule <a name="`dataGoogleVmwareengineExternalAccessRule` Submodule" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleVmwareengineExternalAccessRule <a name="DataGoogleVmwareengineExternalAccessRule" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/data-sources/vmwareengine_external_access_rule google_vmwareengine_external_access_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.Initializer"></a>

```typescript
import { dataGoogleVmwareengineExternalAccessRule } from '@cdktf/provider-google'

new dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule(scope: Construct, id: string, config: DataGoogleVmwareengineExternalAccessRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleConfig">DataGoogleVmwareengineExternalAccessRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleConfig">DataGoogleVmwareengineExternalAccessRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleVmwareengineExternalAccessRule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.isConstruct"></a>

```typescript
import { dataGoogleVmwareengineExternalAccessRule } from '@cdktf/provider-google'

dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.isTerraformElement"></a>

```typescript
import { dataGoogleVmwareengineExternalAccessRule } from '@cdktf/provider-google'

dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.isTerraformDataSource"></a>

```typescript
import { dataGoogleVmwareengineExternalAccessRule } from '@cdktf/provider-google'

dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.generateConfigForImport"></a>

```typescript
import { dataGoogleVmwareengineExternalAccessRule } from '@cdktf/provider-google'

dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataGoogleVmwareengineExternalAccessRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleVmwareengineExternalAccessRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleVmwareengineExternalAccessRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/data-sources/vmwareengine_external_access_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleVmwareengineExternalAccessRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.destinationIpRanges">destinationIpRanges</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesList">DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.destinationPorts">destinationPorts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.ipProtocol">ipProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.sourceIpRanges">sourceIpRanges</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesList">DataGoogleVmwareengineExternalAccessRuleSourceIpRangesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.sourcePorts">sourcePorts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.parentInput">parentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.parent">parent</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `destinationIpRanges`<sup>Required</sup> <a name="destinationIpRanges" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.destinationIpRanges"></a>

```typescript
public readonly destinationIpRanges: DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesList">DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesList</a>

---

##### `destinationPorts`<sup>Required</sup> <a name="destinationPorts" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.destinationPorts"></a>

```typescript
public readonly destinationPorts: string[];
```

- *Type:* string[]

---

##### `ipProtocol`<sup>Required</sup> <a name="ipProtocol" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.ipProtocol"></a>

```typescript
public readonly ipProtocol: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `sourceIpRanges`<sup>Required</sup> <a name="sourceIpRanges" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.sourceIpRanges"></a>

```typescript
public readonly sourceIpRanges: DataGoogleVmwareengineExternalAccessRuleSourceIpRangesList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesList">DataGoogleVmwareengineExternalAccessRuleSourceIpRangesList</a>

---

##### `sourcePorts`<sup>Required</sup> <a name="sourcePorts" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.sourcePorts"></a>

```typescript
public readonly sourcePorts: string[];
```

- *Type:* string[]

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.parentInput"></a>

```typescript
public readonly parentInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleVmwareengineExternalAccessRuleConfig <a name="DataGoogleVmwareengineExternalAccessRuleConfig" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleConfig.Initializer"></a>

```typescript
import { dataGoogleVmwareengineExternalAccessRule } from '@cdktf/provider-google'

const dataGoogleVmwareengineExternalAccessRuleConfig: dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleConfig.property.name">name</a></code> | <code>string</code> | The ID of the external access rule. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleConfig.property.parent">parent</a></code> | <code>string</code> | The resource name of the network policy. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: projects/my-project/locations/us-west1-a/networkPolicies/my-policy. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/data-sources/vmwareengine_external_access_rule#id DataGoogleVmwareengineExternalAccessRule#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The ID of the external access rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/data-sources/vmwareengine_external_access_rule#name DataGoogleVmwareengineExternalAccessRule#name}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleConfig.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

The resource name of the network policy. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: projects/my-project/locations/us-west1-a/networkPolicies/my-policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/data-sources/vmwareengine_external_access_rule#parent DataGoogleVmwareengineExternalAccessRule#parent}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/data-sources/vmwareengine_external_access_rule#id DataGoogleVmwareengineExternalAccessRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataGoogleVmwareengineExternalAccessRuleDestinationIpRanges <a name="DataGoogleVmwareengineExternalAccessRuleDestinationIpRanges" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRanges"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRanges.Initializer"></a>

```typescript
import { dataGoogleVmwareengineExternalAccessRule } from '@cdktf/provider-google'

const dataGoogleVmwareengineExternalAccessRuleDestinationIpRanges: dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRanges = { ... }
```


### DataGoogleVmwareengineExternalAccessRuleSourceIpRanges <a name="DataGoogleVmwareengineExternalAccessRuleSourceIpRanges" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRanges"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRanges.Initializer"></a>

```typescript
import { dataGoogleVmwareengineExternalAccessRule } from '@cdktf/provider-google'

const dataGoogleVmwareengineExternalAccessRuleSourceIpRanges: dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRanges = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesList <a name="DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesList" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesList.Initializer"></a>

```typescript
import { dataGoogleVmwareengineExternalAccessRule } from '@cdktf/provider-google'

new dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesList.get"></a>

```typescript
public get(index: number): DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference <a name="DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.Initializer"></a>

```typescript
import { dataGoogleVmwareengineExternalAccessRule } from '@cdktf/provider-google'

new dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.property.externalAddress">externalAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.property.ipAddressRange">ipAddressRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRanges">DataGoogleVmwareengineExternalAccessRuleDestinationIpRanges</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `externalAddress`<sup>Required</sup> <a name="externalAddress" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.property.externalAddress"></a>

```typescript
public readonly externalAddress: string;
```

- *Type:* string

---

##### `ipAddressRange`<sup>Required</sup> <a name="ipAddressRange" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.property.ipAddressRange"></a>

```typescript
public readonly ipAddressRange: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleVmwareengineExternalAccessRuleDestinationIpRanges;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleDestinationIpRanges">DataGoogleVmwareengineExternalAccessRuleDestinationIpRanges</a>

---


### DataGoogleVmwareengineExternalAccessRuleSourceIpRangesList <a name="DataGoogleVmwareengineExternalAccessRuleSourceIpRangesList" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesList.Initializer"></a>

```typescript
import { dataGoogleVmwareengineExternalAccessRule } from '@cdktf/provider-google'

new dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesList.get"></a>

```typescript
public get(index: number): DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference <a name="DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.Initializer"></a>

```typescript
import { dataGoogleVmwareengineExternalAccessRule } from '@cdktf/provider-google'

new dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.property.ipAddress">ipAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.property.ipAddressRange">ipAddressRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRanges">DataGoogleVmwareengineExternalAccessRuleSourceIpRanges</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

---

##### `ipAddressRange`<sup>Required</sup> <a name="ipAddressRange" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.property.ipAddressRange"></a>

```typescript
public readonly ipAddressRange: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleVmwareengineExternalAccessRuleSourceIpRanges;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAccessRule.DataGoogleVmwareengineExternalAccessRuleSourceIpRanges">DataGoogleVmwareengineExternalAccessRuleSourceIpRanges</a>

---



