# `vmwareengineExternalAccessRule` Submodule <a name="`vmwareengineExternalAccessRule` Submodule" id="@cdktf/provider-google.vmwareengineExternalAccessRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VmwareengineExternalAccessRule <a name="VmwareengineExternalAccessRule" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/vmwareengine_external_access_rule google_vmwareengine_external_access_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.Initializer"></a>

```typescript
import { vmwareengineExternalAccessRule } from '@cdktf/provider-google'

new vmwareengineExternalAccessRule.VmwareengineExternalAccessRule(scope: Construct, id: string, config: VmwareengineExternalAccessRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleConfig">VmwareengineExternalAccessRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleConfig">VmwareengineExternalAccessRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.putDestinationIpRanges">putDestinationIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.putSourceIpRanges">putSourceIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDestinationIpRanges` <a name="putDestinationIpRanges" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.putDestinationIpRanges"></a>

```typescript
public putDestinationIpRanges(value: IResolvable | VmwareengineExternalAccessRuleDestinationIpRanges[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.putDestinationIpRanges.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRanges">VmwareengineExternalAccessRuleDestinationIpRanges</a>[]

---

##### `putSourceIpRanges` <a name="putSourceIpRanges" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.putSourceIpRanges"></a>

```typescript
public putSourceIpRanges(value: IResolvable | VmwareengineExternalAccessRuleSourceIpRanges[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.putSourceIpRanges.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRanges">VmwareengineExternalAccessRuleSourceIpRanges</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.putTimeouts"></a>

```typescript
public putTimeouts(value: VmwareengineExternalAccessRuleTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeouts">VmwareengineExternalAccessRuleTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a VmwareengineExternalAccessRule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.isConstruct"></a>

```typescript
import { vmwareengineExternalAccessRule } from '@cdktf/provider-google'

vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.isTerraformElement"></a>

```typescript
import { vmwareengineExternalAccessRule } from '@cdktf/provider-google'

vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.isTerraformResource"></a>

```typescript
import { vmwareengineExternalAccessRule } from '@cdktf/provider-google'

vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.generateConfigForImport"></a>

```typescript
import { vmwareengineExternalAccessRule } from '@cdktf/provider-google'

vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a VmwareengineExternalAccessRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VmwareengineExternalAccessRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VmwareengineExternalAccessRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/vmwareengine_external_access_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the VmwareengineExternalAccessRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.destinationIpRanges">destinationIpRanges</a></code> | <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesList">VmwareengineExternalAccessRuleDestinationIpRangesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.sourceIpRanges">sourceIpRanges</a></code> | <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesList">VmwareengineExternalAccessRuleSourceIpRangesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference">VmwareengineExternalAccessRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.destinationIpRangesInput">destinationIpRangesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRanges">VmwareengineExternalAccessRuleDestinationIpRanges</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.destinationPortsInput">destinationPortsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.ipProtocolInput">ipProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.parentInput">parentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.priorityInput">priorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.sourceIpRangesInput">sourceIpRangesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRanges">VmwareengineExternalAccessRuleSourceIpRanges</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.sourcePortsInput">sourcePortsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeouts">VmwareengineExternalAccessRuleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.destinationPorts">destinationPorts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.ipProtocol">ipProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.parent">parent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.sourcePorts">sourcePorts</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `destinationIpRanges`<sup>Required</sup> <a name="destinationIpRanges" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.destinationIpRanges"></a>

```typescript
public readonly destinationIpRanges: VmwareengineExternalAccessRuleDestinationIpRangesList;
```

- *Type:* <a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesList">VmwareengineExternalAccessRuleDestinationIpRangesList</a>

---

##### `sourceIpRanges`<sup>Required</sup> <a name="sourceIpRanges" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.sourceIpRanges"></a>

```typescript
public readonly sourceIpRanges: VmwareengineExternalAccessRuleSourceIpRangesList;
```

- *Type:* <a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesList">VmwareengineExternalAccessRuleSourceIpRangesList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.timeouts"></a>

```typescript
public readonly timeouts: VmwareengineExternalAccessRuleTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference">VmwareengineExternalAccessRuleTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `destinationIpRangesInput`<sup>Optional</sup> <a name="destinationIpRangesInput" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.destinationIpRangesInput"></a>

```typescript
public readonly destinationIpRangesInput: IResolvable | VmwareengineExternalAccessRuleDestinationIpRanges[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRanges">VmwareengineExternalAccessRuleDestinationIpRanges</a>[]

---

##### `destinationPortsInput`<sup>Optional</sup> <a name="destinationPortsInput" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.destinationPortsInput"></a>

```typescript
public readonly destinationPortsInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ipProtocolInput`<sup>Optional</sup> <a name="ipProtocolInput" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.ipProtocolInput"></a>

```typescript
public readonly ipProtocolInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.parentInput"></a>

```typescript
public readonly parentInput: string;
```

- *Type:* string

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.priorityInput"></a>

```typescript
public readonly priorityInput: number;
```

- *Type:* number

---

##### `sourceIpRangesInput`<sup>Optional</sup> <a name="sourceIpRangesInput" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.sourceIpRangesInput"></a>

```typescript
public readonly sourceIpRangesInput: IResolvable | VmwareengineExternalAccessRuleSourceIpRanges[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRanges">VmwareengineExternalAccessRuleSourceIpRanges</a>[]

---

##### `sourcePortsInput`<sup>Optional</sup> <a name="sourcePortsInput" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.sourcePortsInput"></a>

```typescript
public readonly sourcePortsInput: string[];
```

- *Type:* string[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | VmwareengineExternalAccessRuleTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeouts">VmwareengineExternalAccessRuleTimeouts</a>

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `destinationPorts`<sup>Required</sup> <a name="destinationPorts" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.destinationPorts"></a>

```typescript
public readonly destinationPorts: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ipProtocol`<sup>Required</sup> <a name="ipProtocol" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.ipProtocol"></a>

```typescript
public readonly ipProtocol: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `sourcePorts`<sup>Required</sup> <a name="sourcePorts" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.sourcePorts"></a>

```typescript
public readonly sourcePorts: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VmwareengineExternalAccessRuleConfig <a name="VmwareengineExternalAccessRuleConfig" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleConfig.Initializer"></a>

```typescript
import { vmwareengineExternalAccessRule } from '@cdktf/provider-google'

const vmwareengineExternalAccessRuleConfig: vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleConfig.property.action">action</a></code> | <code>string</code> | The action that the external access rule performs. Possible values: ["ALLOW", "DENY"]. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleConfig.property.destinationIpRanges">destinationIpRanges</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRanges">VmwareengineExternalAccessRuleDestinationIpRanges</a>[]</code> | destination_ip_ranges block. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleConfig.property.destinationPorts">destinationPorts</a></code> | <code>string[]</code> | A list of destination ports to which the external access rule applies. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleConfig.property.ipProtocol">ipProtocol</a></code> | <code>string</code> | The IP protocol to which the external access rule applies. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleConfig.property.name">name</a></code> | <code>string</code> | The ID of the external access rule. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleConfig.property.parent">parent</a></code> | <code>string</code> | The resource name of the network policy. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: projects/my-project/locations/us-west1-a/networkPolicies/my-policy. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleConfig.property.priority">priority</a></code> | <code>number</code> | External access rule priority, which determines the external access rule to use when multiple rules apply. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleConfig.property.sourceIpRanges">sourceIpRanges</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRanges">VmwareengineExternalAccessRuleSourceIpRanges</a>[]</code> | source_ip_ranges block. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleConfig.property.sourcePorts">sourcePorts</a></code> | <code>string[]</code> | A list of source ports to which the external access rule applies. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleConfig.property.description">description</a></code> | <code>string</code> | User-provided description for the external access rule. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/vmwareengine_external_access_rule#id VmwareengineExternalAccessRule#id}. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeouts">VmwareengineExternalAccessRuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleConfig.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

The action that the external access rule performs. Possible values: ["ALLOW", "DENY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/vmwareengine_external_access_rule#action VmwareengineExternalAccessRule#action}

---

##### `destinationIpRanges`<sup>Required</sup> <a name="destinationIpRanges" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleConfig.property.destinationIpRanges"></a>

```typescript
public readonly destinationIpRanges: IResolvable | VmwareengineExternalAccessRuleDestinationIpRanges[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRanges">VmwareengineExternalAccessRuleDestinationIpRanges</a>[]

destination_ip_ranges block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/vmwareengine_external_access_rule#destination_ip_ranges VmwareengineExternalAccessRule#destination_ip_ranges}

---

##### `destinationPorts`<sup>Required</sup> <a name="destinationPorts" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleConfig.property.destinationPorts"></a>

```typescript
public readonly destinationPorts: string[];
```

- *Type:* string[]

A list of destination ports to which the external access rule applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/vmwareengine_external_access_rule#destination_ports VmwareengineExternalAccessRule#destination_ports}

---

##### `ipProtocol`<sup>Required</sup> <a name="ipProtocol" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleConfig.property.ipProtocol"></a>

```typescript
public readonly ipProtocol: string;
```

- *Type:* string

The IP protocol to which the external access rule applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/vmwareengine_external_access_rule#ip_protocol VmwareengineExternalAccessRule#ip_protocol}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The ID of the external access rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/vmwareengine_external_access_rule#name VmwareengineExternalAccessRule#name}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleConfig.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

The resource name of the network policy. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: projects/my-project/locations/us-west1-a/networkPolicies/my-policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/vmwareengine_external_access_rule#parent VmwareengineExternalAccessRule#parent}

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleConfig.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

External access rule priority, which determines the external access rule to use when multiple rules apply.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/vmwareengine_external_access_rule#priority VmwareengineExternalAccessRule#priority}

---

##### `sourceIpRanges`<sup>Required</sup> <a name="sourceIpRanges" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleConfig.property.sourceIpRanges"></a>

```typescript
public readonly sourceIpRanges: IResolvable | VmwareengineExternalAccessRuleSourceIpRanges[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRanges">VmwareengineExternalAccessRuleSourceIpRanges</a>[]

source_ip_ranges block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/vmwareengine_external_access_rule#source_ip_ranges VmwareengineExternalAccessRule#source_ip_ranges}

---

##### `sourcePorts`<sup>Required</sup> <a name="sourcePorts" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleConfig.property.sourcePorts"></a>

```typescript
public readonly sourcePorts: string[];
```

- *Type:* string[]

A list of source ports to which the external access rule applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/vmwareengine_external_access_rule#source_ports VmwareengineExternalAccessRule#source_ports}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

User-provided description for the external access rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/vmwareengine_external_access_rule#description VmwareengineExternalAccessRule#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/vmwareengine_external_access_rule#id VmwareengineExternalAccessRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleConfig.property.timeouts"></a>

```typescript
public readonly timeouts: VmwareengineExternalAccessRuleTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeouts">VmwareengineExternalAccessRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/vmwareengine_external_access_rule#timeouts VmwareengineExternalAccessRule#timeouts}

---

### VmwareengineExternalAccessRuleDestinationIpRanges <a name="VmwareengineExternalAccessRuleDestinationIpRanges" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRanges"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRanges.Initializer"></a>

```typescript
import { vmwareengineExternalAccessRule } from '@cdktf/provider-google'

const vmwareengineExternalAccessRuleDestinationIpRanges: vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRanges = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRanges.property.externalAddress">externalAddress</a></code> | <code>string</code> | The name of an 'ExternalAddress' resource. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRanges.property.ipAddressRange">ipAddressRange</a></code> | <code>string</code> | An IP address range in the CIDR format. |

---

##### `externalAddress`<sup>Optional</sup> <a name="externalAddress" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRanges.property.externalAddress"></a>

```typescript
public readonly externalAddress: string;
```

- *Type:* string

The name of an 'ExternalAddress' resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/vmwareengine_external_access_rule#external_address VmwareengineExternalAccessRule#external_address}

---

##### `ipAddressRange`<sup>Optional</sup> <a name="ipAddressRange" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRanges.property.ipAddressRange"></a>

```typescript
public readonly ipAddressRange: string;
```

- *Type:* string

An IP address range in the CIDR format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/vmwareengine_external_access_rule#ip_address_range VmwareengineExternalAccessRule#ip_address_range}

---

### VmwareengineExternalAccessRuleSourceIpRanges <a name="VmwareengineExternalAccessRuleSourceIpRanges" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRanges"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRanges.Initializer"></a>

```typescript
import { vmwareengineExternalAccessRule } from '@cdktf/provider-google'

const vmwareengineExternalAccessRuleSourceIpRanges: vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRanges = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRanges.property.ipAddress">ipAddress</a></code> | <code>string</code> | A single IP address. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRanges.property.ipAddressRange">ipAddressRange</a></code> | <code>string</code> | An IP address range in the CIDR format. |

---

##### `ipAddress`<sup>Optional</sup> <a name="ipAddress" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRanges.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

A single IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/vmwareengine_external_access_rule#ip_address VmwareengineExternalAccessRule#ip_address}

---

##### `ipAddressRange`<sup>Optional</sup> <a name="ipAddressRange" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRanges.property.ipAddressRange"></a>

```typescript
public readonly ipAddressRange: string;
```

- *Type:* string

An IP address range in the CIDR format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/vmwareengine_external_access_rule#ip_address_range VmwareengineExternalAccessRule#ip_address_range}

---

### VmwareengineExternalAccessRuleTimeouts <a name="VmwareengineExternalAccessRuleTimeouts" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeouts.Initializer"></a>

```typescript
import { vmwareengineExternalAccessRule } from '@cdktf/provider-google'

const vmwareengineExternalAccessRuleTimeouts: vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/vmwareengine_external_access_rule#create VmwareengineExternalAccessRule#create}. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/vmwareengine_external_access_rule#delete VmwareengineExternalAccessRule#delete}. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/vmwareengine_external_access_rule#update VmwareengineExternalAccessRule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/vmwareengine_external_access_rule#create VmwareengineExternalAccessRule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/vmwareengine_external_access_rule#delete VmwareengineExternalAccessRule#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/vmwareengine_external_access_rule#update VmwareengineExternalAccessRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VmwareengineExternalAccessRuleDestinationIpRangesList <a name="VmwareengineExternalAccessRuleDestinationIpRangesList" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesList.Initializer"></a>

```typescript
import { vmwareengineExternalAccessRule } from '@cdktf/provider-google'

new vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesList.get"></a>

```typescript
public get(index: number): VmwareengineExternalAccessRuleDestinationIpRangesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRanges">VmwareengineExternalAccessRuleDestinationIpRanges</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VmwareengineExternalAccessRuleDestinationIpRanges[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRanges">VmwareengineExternalAccessRuleDestinationIpRanges</a>[]

---


### VmwareengineExternalAccessRuleDestinationIpRangesOutputReference <a name="VmwareengineExternalAccessRuleDestinationIpRangesOutputReference" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.Initializer"></a>

```typescript
import { vmwareengineExternalAccessRule } from '@cdktf/provider-google'

new vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.resetExternalAddress">resetExternalAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.resetIpAddressRange">resetIpAddressRange</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExternalAddress` <a name="resetExternalAddress" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.resetExternalAddress"></a>

```typescript
public resetExternalAddress(): void
```

##### `resetIpAddressRange` <a name="resetIpAddressRange" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.resetIpAddressRange"></a>

```typescript
public resetIpAddressRange(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.property.externalAddressInput">externalAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.property.ipAddressRangeInput">ipAddressRangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.property.externalAddress">externalAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.property.ipAddressRange">ipAddressRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRanges">VmwareengineExternalAccessRuleDestinationIpRanges</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `externalAddressInput`<sup>Optional</sup> <a name="externalAddressInput" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.property.externalAddressInput"></a>

```typescript
public readonly externalAddressInput: string;
```

- *Type:* string

---

##### `ipAddressRangeInput`<sup>Optional</sup> <a name="ipAddressRangeInput" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.property.ipAddressRangeInput"></a>

```typescript
public readonly ipAddressRangeInput: string;
```

- *Type:* string

---

##### `externalAddress`<sup>Required</sup> <a name="externalAddress" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.property.externalAddress"></a>

```typescript
public readonly externalAddress: string;
```

- *Type:* string

---

##### `ipAddressRange`<sup>Required</sup> <a name="ipAddressRange" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.property.ipAddressRange"></a>

```typescript
public readonly ipAddressRange: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VmwareengineExternalAccessRuleDestinationIpRanges;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRanges">VmwareengineExternalAccessRuleDestinationIpRanges</a>

---


### VmwareengineExternalAccessRuleSourceIpRangesList <a name="VmwareengineExternalAccessRuleSourceIpRangesList" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesList.Initializer"></a>

```typescript
import { vmwareengineExternalAccessRule } from '@cdktf/provider-google'

new vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesList.get"></a>

```typescript
public get(index: number): VmwareengineExternalAccessRuleSourceIpRangesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRanges">VmwareengineExternalAccessRuleSourceIpRanges</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VmwareengineExternalAccessRuleSourceIpRanges[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRanges">VmwareengineExternalAccessRuleSourceIpRanges</a>[]

---


### VmwareengineExternalAccessRuleSourceIpRangesOutputReference <a name="VmwareengineExternalAccessRuleSourceIpRangesOutputReference" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.Initializer"></a>

```typescript
import { vmwareengineExternalAccessRule } from '@cdktf/provider-google'

new vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.resetIpAddress">resetIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.resetIpAddressRange">resetIpAddressRange</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIpAddress` <a name="resetIpAddress" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.resetIpAddress"></a>

```typescript
public resetIpAddress(): void
```

##### `resetIpAddressRange` <a name="resetIpAddressRange" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.resetIpAddressRange"></a>

```typescript
public resetIpAddressRange(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.property.ipAddressInput">ipAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.property.ipAddressRangeInput">ipAddressRangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.property.ipAddress">ipAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.property.ipAddressRange">ipAddressRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRanges">VmwareengineExternalAccessRuleSourceIpRanges</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipAddressInput`<sup>Optional</sup> <a name="ipAddressInput" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.property.ipAddressInput"></a>

```typescript
public readonly ipAddressInput: string;
```

- *Type:* string

---

##### `ipAddressRangeInput`<sup>Optional</sup> <a name="ipAddressRangeInput" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.property.ipAddressRangeInput"></a>

```typescript
public readonly ipAddressRangeInput: string;
```

- *Type:* string

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

---

##### `ipAddressRange`<sup>Required</sup> <a name="ipAddressRange" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.property.ipAddressRange"></a>

```typescript
public readonly ipAddressRange: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VmwareengineExternalAccessRuleSourceIpRanges;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRanges">VmwareengineExternalAccessRuleSourceIpRanges</a>

---


### VmwareengineExternalAccessRuleTimeoutsOutputReference <a name="VmwareengineExternalAccessRuleTimeoutsOutputReference" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.Initializer"></a>

```typescript
import { vmwareengineExternalAccessRule } from '@cdktf/provider-google'

new vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeouts">VmwareengineExternalAccessRuleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VmwareengineExternalAccessRuleTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeouts">VmwareengineExternalAccessRuleTimeouts</a>

---



