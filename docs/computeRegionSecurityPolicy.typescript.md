# `computeRegionSecurityPolicy` Submodule <a name="`computeRegionSecurityPolicy` Submodule" id="@cdktf/provider-google.computeRegionSecurityPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeRegionSecurityPolicy <a name="ComputeRegionSecurityPolicy" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_security_policy google_compute_region_security_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.Initializer"></a>

```typescript
import { computeRegionSecurityPolicy } from '@cdktf/provider-google'

new computeRegionSecurityPolicy.ComputeRegionSecurityPolicy(scope: Construct, id: string, config: ComputeRegionSecurityPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyConfig">ComputeRegionSecurityPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyConfig">ComputeRegionSecurityPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.putDdosProtectionConfig">putDdosProtectionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.putRules">putRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.putUserDefinedFields">putUserDefinedFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.resetDdosProtectionConfig">resetDdosProtectionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.resetRules">resetRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.resetUserDefinedFields">resetUserDefinedFields</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDdosProtectionConfig` <a name="putDdosProtectionConfig" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.putDdosProtectionConfig"></a>

```typescript
public putDdosProtectionConfig(value: ComputeRegionSecurityPolicyDdosProtectionConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.putDdosProtectionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfig">ComputeRegionSecurityPolicyDdosProtectionConfig</a>

---

##### `putRules` <a name="putRules" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.putRules"></a>

```typescript
public putRules(value: IResolvable | ComputeRegionSecurityPolicyRules[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.putRules.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRules">ComputeRegionSecurityPolicyRules</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.putTimeouts"></a>

```typescript
public putTimeouts(value: ComputeRegionSecurityPolicyTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeouts">ComputeRegionSecurityPolicyTimeouts</a>

---

##### `putUserDefinedFields` <a name="putUserDefinedFields" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.putUserDefinedFields"></a>

```typescript
public putUserDefinedFields(value: IResolvable | ComputeRegionSecurityPolicyUserDefinedFields[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.putUserDefinedFields.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFields">ComputeRegionSecurityPolicyUserDefinedFields</a>[]

---

##### `resetDdosProtectionConfig` <a name="resetDdosProtectionConfig" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.resetDdosProtectionConfig"></a>

```typescript
public resetDdosProtectionConfig(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetRules` <a name="resetRules" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.resetRules"></a>

```typescript
public resetRules(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.resetType"></a>

```typescript
public resetType(): void
```

##### `resetUserDefinedFields` <a name="resetUserDefinedFields" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.resetUserDefinedFields"></a>

```typescript
public resetUserDefinedFields(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ComputeRegionSecurityPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.isConstruct"></a>

```typescript
import { computeRegionSecurityPolicy } from '@cdktf/provider-google'

computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.isTerraformElement"></a>

```typescript
import { computeRegionSecurityPolicy } from '@cdktf/provider-google'

computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.isTerraformResource"></a>

```typescript
import { computeRegionSecurityPolicy } from '@cdktf/provider-google'

computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.generateConfigForImport"></a>

```typescript
import { computeRegionSecurityPolicy } from '@cdktf/provider-google'

computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ComputeRegionSecurityPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ComputeRegionSecurityPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ComputeRegionSecurityPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_security_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ComputeRegionSecurityPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.ddosProtectionConfig">ddosProtectionConfig</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference">ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.fingerprint">fingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.policyId">policyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.rules">rules</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesList">ComputeRegionSecurityPolicyRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.selfLink">selfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.selfLinkWithPolicyId">selfLinkWithPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference">ComputeRegionSecurityPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.userDefinedFields">userDefinedFields</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsList">ComputeRegionSecurityPolicyUserDefinedFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.ddosProtectionConfigInput">ddosProtectionConfigInput</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfig">ComputeRegionSecurityPolicyDdosProtectionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.rulesInput">rulesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRules">ComputeRegionSecurityPolicyRules</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeouts">ComputeRegionSecurityPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.userDefinedFieldsInput">userDefinedFieldsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFields">ComputeRegionSecurityPolicyUserDefinedFields</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `ddosProtectionConfig`<sup>Required</sup> <a name="ddosProtectionConfig" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.ddosProtectionConfig"></a>

```typescript
public readonly ddosProtectionConfig: ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference">ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference</a>

---

##### `fingerprint`<sup>Required</sup> <a name="fingerprint" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.fingerprint"></a>

```typescript
public readonly fingerprint: string;
```

- *Type:* string

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.policyId"></a>

```typescript
public readonly policyId: string;
```

- *Type:* string

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.rules"></a>

```typescript
public readonly rules: ComputeRegionSecurityPolicyRulesList;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesList">ComputeRegionSecurityPolicyRulesList</a>

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.selfLink"></a>

```typescript
public readonly selfLink: string;
```

- *Type:* string

---

##### `selfLinkWithPolicyId`<sup>Required</sup> <a name="selfLinkWithPolicyId" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.selfLinkWithPolicyId"></a>

```typescript
public readonly selfLinkWithPolicyId: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.timeouts"></a>

```typescript
public readonly timeouts: ComputeRegionSecurityPolicyTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference">ComputeRegionSecurityPolicyTimeoutsOutputReference</a>

---

##### `userDefinedFields`<sup>Required</sup> <a name="userDefinedFields" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.userDefinedFields"></a>

```typescript
public readonly userDefinedFields: ComputeRegionSecurityPolicyUserDefinedFieldsList;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsList">ComputeRegionSecurityPolicyUserDefinedFieldsList</a>

---

##### `ddosProtectionConfigInput`<sup>Optional</sup> <a name="ddosProtectionConfigInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.ddosProtectionConfigInput"></a>

```typescript
public readonly ddosProtectionConfigInput: ComputeRegionSecurityPolicyDdosProtectionConfig;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfig">ComputeRegionSecurityPolicyDdosProtectionConfig</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `rulesInput`<sup>Optional</sup> <a name="rulesInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.rulesInput"></a>

```typescript
public readonly rulesInput: IResolvable | ComputeRegionSecurityPolicyRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRules">ComputeRegionSecurityPolicyRules</a>[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ComputeRegionSecurityPolicyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeouts">ComputeRegionSecurityPolicyTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `userDefinedFieldsInput`<sup>Optional</sup> <a name="userDefinedFieldsInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.userDefinedFieldsInput"></a>

```typescript
public readonly userDefinedFieldsInput: IResolvable | ComputeRegionSecurityPolicyUserDefinedFields[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFields">ComputeRegionSecurityPolicyUserDefinedFields</a>[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeRegionSecurityPolicyConfig <a name="ComputeRegionSecurityPolicyConfig" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyConfig.Initializer"></a>

```typescript
import { computeRegionSecurityPolicy } from '@cdktf/provider-google'

const computeRegionSecurityPolicyConfig: computeRegionSecurityPolicy.ComputeRegionSecurityPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyConfig.property.name">name</a></code> | <code>string</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyConfig.property.ddosProtectionConfig">ddosProtectionConfig</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfig">ComputeRegionSecurityPolicyDdosProtectionConfig</a></code> | ddos_protection_config block. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyConfig.property.description">description</a></code> | <code>string</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_security_policy#id ComputeRegionSecurityPolicy#id}. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_security_policy#project ComputeRegionSecurityPolicy#project}. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyConfig.property.region">region</a></code> | <code>string</code> | The Region in which the created Region Security Policy should reside. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyConfig.property.rules">rules</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRules">ComputeRegionSecurityPolicyRules</a>[]</code> | rules block. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeouts">ComputeRegionSecurityPolicyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyConfig.property.type">type</a></code> | <code>string</code> | The type indicates the intended use of the security policy. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyConfig.property.userDefinedFields">userDefinedFields</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFields">ComputeRegionSecurityPolicyUserDefinedFields</a>[]</code> | user_defined_fields block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the resource.

Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035.
Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_security_policy#name ComputeRegionSecurityPolicy#name}

---

##### `ddosProtectionConfig`<sup>Optional</sup> <a name="ddosProtectionConfig" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyConfig.property.ddosProtectionConfig"></a>

```typescript
public readonly ddosProtectionConfig: ComputeRegionSecurityPolicyDdosProtectionConfig;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfig">ComputeRegionSecurityPolicyDdosProtectionConfig</a>

ddos_protection_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_security_policy#ddos_protection_config ComputeRegionSecurityPolicy#ddos_protection_config}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_security_policy#description ComputeRegionSecurityPolicy#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_security_policy#id ComputeRegionSecurityPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_security_policy#project ComputeRegionSecurityPolicy#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The Region in which the created Region Security Policy should reside.

If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_security_policy#region ComputeRegionSecurityPolicy#region}

---

##### `rules`<sup>Optional</sup> <a name="rules" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyConfig.property.rules"></a>

```typescript
public readonly rules: IResolvable | ComputeRegionSecurityPolicyRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRules">ComputeRegionSecurityPolicyRules</a>[]

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_security_policy#rules ComputeRegionSecurityPolicy#rules}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ComputeRegionSecurityPolicyTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeouts">ComputeRegionSecurityPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_security_policy#timeouts ComputeRegionSecurityPolicy#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type indicates the intended use of the security policy.

CLOUD_ARMOR: Cloud Armor backend security policies can be configured to filter incoming HTTP requests targeting backend services. They filter requests before they hit the origin servers.
- CLOUD_ARMOR_EDGE: Cloud Armor edge security policies can be configured to filter incoming HTTP requests targeting backend services (including Cloud CDN-enabled) as well as backend buckets (Cloud Storage). They filter requests before the request is served from Google's cache.
- CLOUD_ARMOR_NETWORK: Cloud Armor network policies can be configured to filter packets targeting network load balancing resources such as backend services, target pools, target instances, and instances with external IPs. They filter requests before the request is served from the application.
This field can be set only at resource creation time. Possible values: ["CLOUD_ARMOR", "CLOUD_ARMOR_EDGE", "CLOUD_ARMOR_NETWORK"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_security_policy#type ComputeRegionSecurityPolicy#type}

---

##### `userDefinedFields`<sup>Optional</sup> <a name="userDefinedFields" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyConfig.property.userDefinedFields"></a>

```typescript
public readonly userDefinedFields: IResolvable | ComputeRegionSecurityPolicyUserDefinedFields[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFields">ComputeRegionSecurityPolicyUserDefinedFields</a>[]

user_defined_fields block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_security_policy#user_defined_fields ComputeRegionSecurityPolicy#user_defined_fields}

---

### ComputeRegionSecurityPolicyDdosProtectionConfig <a name="ComputeRegionSecurityPolicyDdosProtectionConfig" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfig.Initializer"></a>

```typescript
import { computeRegionSecurityPolicy } from '@cdktf/provider-google'

const computeRegionSecurityPolicyDdosProtectionConfig: computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfig.property.ddosProtection">ddosProtection</a></code> | <code>string</code> | Google Cloud Armor offers the following options to help protect systems against DDoS attacks: - STANDARD: basic always-on protection for network load balancers, protocol forwarding, or VMs with public IP addresses. |

---

##### `ddosProtection`<sup>Required</sup> <a name="ddosProtection" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfig.property.ddosProtection"></a>

```typescript
public readonly ddosProtection: string;
```

- *Type:* string

Google Cloud Armor offers the following options to help protect systems against DDoS attacks: - STANDARD: basic always-on protection for network load balancers, protocol forwarding, or VMs with public IP addresses.

ADVANCED: additional protections for Managed Protection Plus subscribers who use network load balancers, protocol forwarding, or VMs with public IP addresses.
- ADVANCED_PREVIEW: flag to enable the security policy in preview mode. Possible values: ["ADVANCED", "ADVANCED_PREVIEW", "STANDARD"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_security_policy#ddos_protection ComputeRegionSecurityPolicy#ddos_protection}

---

### ComputeRegionSecurityPolicyRules <a name="ComputeRegionSecurityPolicyRules" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRules.Initializer"></a>

```typescript
import { computeRegionSecurityPolicy } from '@cdktf/provider-google'

const computeRegionSecurityPolicyRules: computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRules.property.action">action</a></code> | <code>string</code> | The Action to perform when the rule is matched. The following are the valid actions:. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRules.property.priority">priority</a></code> | <code>number</code> | An integer indicating the priority of a rule in the list. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRules.property.description">description</a></code> | <code>string</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRules.property.match">match</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatch">ComputeRegionSecurityPolicyRulesMatch</a></code> | match block. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRules.property.networkMatch">networkMatch</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatch">ComputeRegionSecurityPolicyRulesNetworkMatch</a></code> | network_match block. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRules.property.preconfiguredWafConfig">preconfiguredWafConfig</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfig">ComputeRegionSecurityPolicyRulesPreconfiguredWafConfig</a></code> | preconfigured_waf_config block. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRules.property.preview">preview</a></code> | <code>boolean \| cdktf.IResolvable</code> | If set to true, the specified action is not enforced. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRules.property.rateLimitOptions">rateLimitOptions</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptions">ComputeRegionSecurityPolicyRulesRateLimitOptions</a></code> | rate_limit_options block. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRules.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

The Action to perform when the rule is matched. The following are the valid actions:.

* allow: allow access to target.

* deny(STATUS): deny access to target, returns the HTTP response code specified. Valid values for STATUS are 403, 404, and 502.

* rate_based_ban: limit client traffic to the configured threshold and ban the client if the traffic exceeds the threshold. Configure parameters for this action in RateLimitOptions. Requires rateLimitOptions to be set.

* redirect: redirect to a different target. This can either be an internal reCAPTCHA redirect, or an external URL-based redirect via a 302 response. Parameters for this action can be configured via redirectOptions. This action is only supported in Global Security Policies of type CLOUD_ARMOR.

* throttle: limit client traffic to the configured threshold. Configure parameters for this action in rateLimitOptions. Requires rateLimitOptions to be set for this.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_security_policy#action ComputeRegionSecurityPolicy#action}

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRules.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

An integer indicating the priority of a rule in the list.

The priority must be a positive value between 0 and 2147483647.
Rules are evaluated from highest to lowest priority where 0 is the highest priority and 2147483647 is the lowest priority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_security_policy#priority ComputeRegionSecurityPolicy#priority}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRules.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_security_policy#description ComputeRegionSecurityPolicy#description}

---

##### `match`<sup>Optional</sup> <a name="match" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRules.property.match"></a>

```typescript
public readonly match: ComputeRegionSecurityPolicyRulesMatch;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatch">ComputeRegionSecurityPolicyRulesMatch</a>

match block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_security_policy#match ComputeRegionSecurityPolicy#match}

---

##### `networkMatch`<sup>Optional</sup> <a name="networkMatch" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRules.property.networkMatch"></a>

```typescript
public readonly networkMatch: ComputeRegionSecurityPolicyRulesNetworkMatch;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatch">ComputeRegionSecurityPolicyRulesNetworkMatch</a>

network_match block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_security_policy#network_match ComputeRegionSecurityPolicy#network_match}

---

##### `preconfiguredWafConfig`<sup>Optional</sup> <a name="preconfiguredWafConfig" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRules.property.preconfiguredWafConfig"></a>

```typescript
public readonly preconfiguredWafConfig: ComputeRegionSecurityPolicyRulesPreconfiguredWafConfig;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfig">ComputeRegionSecurityPolicyRulesPreconfiguredWafConfig</a>

preconfigured_waf_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_security_policy#preconfigured_waf_config ComputeRegionSecurityPolicy#preconfigured_waf_config}

---

##### `preview`<sup>Optional</sup> <a name="preview" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRules.property.preview"></a>

```typescript
public readonly preview: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If set to true, the specified action is not enforced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_security_policy#preview ComputeRegionSecurityPolicy#preview}

---

##### `rateLimitOptions`<sup>Optional</sup> <a name="rateLimitOptions" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRules.property.rateLimitOptions"></a>

```typescript
public readonly rateLimitOptions: ComputeRegionSecurityPolicyRulesRateLimitOptions;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptions">ComputeRegionSecurityPolicyRulesRateLimitOptions</a>

rate_limit_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_security_policy#rate_limit_options ComputeRegionSecurityPolicy#rate_limit_options}

---

### ComputeRegionSecurityPolicyRulesMatch <a name="ComputeRegionSecurityPolicyRulesMatch" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatch.Initializer"></a>

```typescript
import { computeRegionSecurityPolicy } from '@cdktf/provider-google'

const computeRegionSecurityPolicyRulesMatch: computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatch = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatch.property.config">config</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfig">ComputeRegionSecurityPolicyRulesMatchConfig</a></code> | config block. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatch.property.expr">expr</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExpr">ComputeRegionSecurityPolicyRulesMatchExpr</a></code> | expr block. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatch.property.versionedExpr">versionedExpr</a></code> | <code>string</code> | Preconfigured versioned expression. |

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatch.property.config"></a>

```typescript
public readonly config: ComputeRegionSecurityPolicyRulesMatchConfig;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfig">ComputeRegionSecurityPolicyRulesMatchConfig</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_security_policy#config ComputeRegionSecurityPolicy#config}

---

##### `expr`<sup>Optional</sup> <a name="expr" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatch.property.expr"></a>

```typescript
public readonly expr: ComputeRegionSecurityPolicyRulesMatchExpr;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExpr">ComputeRegionSecurityPolicyRulesMatchExpr</a>

expr block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_security_policy#expr ComputeRegionSecurityPolicy#expr}

---

##### `versionedExpr`<sup>Optional</sup> <a name="versionedExpr" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatch.property.versionedExpr"></a>

```typescript
public readonly versionedExpr: string;
```

- *Type:* string

Preconfigured versioned expression.

If this field is specified, config must also be specified.
Available preconfigured expressions along with their requirements are: SRC_IPS_V1 - must specify the corresponding srcIpRange field in config. Possible values: ["SRC_IPS_V1"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_security_policy#versioned_expr ComputeRegionSecurityPolicy#versioned_expr}

---

### ComputeRegionSecurityPolicyRulesMatchConfig <a name="ComputeRegionSecurityPolicyRulesMatchConfig" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfig.Initializer"></a>

```typescript
import { computeRegionSecurityPolicy } from '@cdktf/provider-google'

const computeRegionSecurityPolicyRulesMatchConfig: computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfig.property.srcIpRanges">srcIpRanges</a></code> | <code>string[]</code> | CIDR IP address range. Maximum number of srcIpRanges allowed is 10. |

---

##### `srcIpRanges`<sup>Optional</sup> <a name="srcIpRanges" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfig.property.srcIpRanges"></a>

```typescript
public readonly srcIpRanges: string[];
```

- *Type:* string[]

CIDR IP address range. Maximum number of srcIpRanges allowed is 10.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_security_policy#src_ip_ranges ComputeRegionSecurityPolicy#src_ip_ranges}

---

### ComputeRegionSecurityPolicyRulesMatchExpr <a name="ComputeRegionSecurityPolicyRulesMatchExpr" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExpr"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExpr.Initializer"></a>

```typescript
import { computeRegionSecurityPolicy } from '@cdktf/provider-google'

const computeRegionSecurityPolicyRulesMatchExpr: computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExpr = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExpr.property.expression">expression</a></code> | <code>string</code> | Textual representation of an expression in Common Expression Language syntax. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExpr.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

Textual representation of an expression in Common Expression Language syntax.

The application context of the containing message determines which well-known feature set of CEL is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_security_policy#expression ComputeRegionSecurityPolicy#expression}

---

### ComputeRegionSecurityPolicyRulesNetworkMatch <a name="ComputeRegionSecurityPolicyRulesNetworkMatch" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatch.Initializer"></a>

```typescript
import { computeRegionSecurityPolicy } from '@cdktf/provider-google'

const computeRegionSecurityPolicyRulesNetworkMatch: computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatch = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatch.property.destIpRanges">destIpRanges</a></code> | <code>string[]</code> | Destination IPv4/IPv6 addresses or CIDR prefixes, in standard text format. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatch.property.destPorts">destPorts</a></code> | <code>string[]</code> | Destination port numbers for TCP/UDP/SCTP. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatch.property.ipProtocols">ipProtocols</a></code> | <code>string[]</code> | IPv4 protocol / IPv6 next header (after extension headers). |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatch.property.srcAsns">srcAsns</a></code> | <code>number[]</code> | BGP Autonomous System Number associated with the source IP address. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatch.property.srcIpRanges">srcIpRanges</a></code> | <code>string[]</code> | Source IPv4/IPv6 addresses or CIDR prefixes, in standard text format. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatch.property.srcPorts">srcPorts</a></code> | <code>string[]</code> | Source port numbers for TCP/UDP/SCTP. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatch.property.srcRegionCodes">srcRegionCodes</a></code> | <code>string[]</code> | Two-letter ISO 3166-1 alpha-2 country code associated with the source IP address. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatch.property.userDefinedFields">userDefinedFields</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFields">ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFields</a>[]</code> | user_defined_fields block. |

---

##### `destIpRanges`<sup>Optional</sup> <a name="destIpRanges" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatch.property.destIpRanges"></a>

```typescript
public readonly destIpRanges: string[];
```

- *Type:* string[]

Destination IPv4/IPv6 addresses or CIDR prefixes, in standard text format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_security_policy#dest_ip_ranges ComputeRegionSecurityPolicy#dest_ip_ranges}

---

##### `destPorts`<sup>Optional</sup> <a name="destPorts" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatch.property.destPorts"></a>

```typescript
public readonly destPorts: string[];
```

- *Type:* string[]

Destination port numbers for TCP/UDP/SCTP.

Each element can be a 16-bit unsigned decimal number (e.g. "80") or range (e.g. "0-1023").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_security_policy#dest_ports ComputeRegionSecurityPolicy#dest_ports}

---

##### `ipProtocols`<sup>Optional</sup> <a name="ipProtocols" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatch.property.ipProtocols"></a>

```typescript
public readonly ipProtocols: string[];
```

- *Type:* string[]

IPv4 protocol / IPv6 next header (after extension headers).

Each element can be an 8-bit unsigned decimal number (e.g. "6"), range (e.g. "253-254"), or one of the following protocol names: "tcp", "udp", "icmp", "esp", "ah", "ipip", or "sctp".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_security_policy#ip_protocols ComputeRegionSecurityPolicy#ip_protocols}

---

##### `srcAsns`<sup>Optional</sup> <a name="srcAsns" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatch.property.srcAsns"></a>

```typescript
public readonly srcAsns: number[];
```

- *Type:* number[]

BGP Autonomous System Number associated with the source IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_security_policy#src_asns ComputeRegionSecurityPolicy#src_asns}

---

##### `srcIpRanges`<sup>Optional</sup> <a name="srcIpRanges" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatch.property.srcIpRanges"></a>

```typescript
public readonly srcIpRanges: string[];
```

- *Type:* string[]

Source IPv4/IPv6 addresses or CIDR prefixes, in standard text format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_security_policy#src_ip_ranges ComputeRegionSecurityPolicy#src_ip_ranges}

---

##### `srcPorts`<sup>Optional</sup> <a name="srcPorts" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatch.property.srcPorts"></a>

```typescript
public readonly srcPorts: string[];
```

- *Type:* string[]

Source port numbers for TCP/UDP/SCTP.

Each element can be a 16-bit unsigned decimal number (e.g. "80") or range (e.g. "0-1023").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_security_policy#src_ports ComputeRegionSecurityPolicy#src_ports}

---

##### `srcRegionCodes`<sup>Optional</sup> <a name="srcRegionCodes" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatch.property.srcRegionCodes"></a>

```typescript
public readonly srcRegionCodes: string[];
```

- *Type:* string[]

Two-letter ISO 3166-1 alpha-2 country code associated with the source IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_security_policy#src_region_codes ComputeRegionSecurityPolicy#src_region_codes}

---

##### `userDefinedFields`<sup>Optional</sup> <a name="userDefinedFields" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatch.property.userDefinedFields"></a>

```typescript
public readonly userDefinedFields: IResolvable | ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFields[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFields">ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFields</a>[]

user_defined_fields block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_security_policy#user_defined_fields ComputeRegionSecurityPolicy#user_defined_fields}

---

### ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFields <a name="ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFields" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFields"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFields.Initializer"></a>

```typescript
import { computeRegionSecurityPolicy } from '@cdktf/provider-google'

const computeRegionSecurityPolicyRulesNetworkMatchUserDefinedFields: computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFields = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFields.property.name">name</a></code> | <code>string</code> | Name of the user-defined field, as given in the definition. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFields.property.values">values</a></code> | <code>string[]</code> | Matching values of the field. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFields.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the user-defined field, as given in the definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_security_policy#name ComputeRegionSecurityPolicy#name}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFields.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Matching values of the field.

Each element can be a 32-bit unsigned decimal or hexadecimal (starting with "0x") number (e.g. "64") or range (e.g. "0x400-0x7ff").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_security_policy#values ComputeRegionSecurityPolicy#values}

---

### ComputeRegionSecurityPolicyRulesPreconfiguredWafConfig <a name="ComputeRegionSecurityPolicyRulesPreconfiguredWafConfig" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfig.Initializer"></a>

```typescript
import { computeRegionSecurityPolicy } from '@cdktf/provider-google'

const computeRegionSecurityPolicyRulesPreconfiguredWafConfig: computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfig.property.exclusion">exclusion</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion">ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion</a>[]</code> | exclusion block. |

---

##### `exclusion`<sup>Optional</sup> <a name="exclusion" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfig.property.exclusion"></a>

```typescript
public readonly exclusion: IResolvable | ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion">ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion</a>[]

exclusion block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_security_policy#exclusion ComputeRegionSecurityPolicy#exclusion}

---

### ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion <a name="ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion.Initializer"></a>

```typescript
import { computeRegionSecurityPolicy } from '@cdktf/provider-google'

const computeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion: computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion.property.targetRuleSet">targetRuleSet</a></code> | <code>string</code> | Target WAF rule set to apply the preconfigured WAF exclusion. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion.property.requestCookie">requestCookie</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookie">ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookie</a>[]</code> | request_cookie block. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion.property.requestHeader">requestHeader</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeader">ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeader</a>[]</code> | request_header block. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion.property.requestQueryParam">requestQueryParam</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParam">ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParam</a>[]</code> | request_query_param block. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion.property.requestUri">requestUri</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUri">ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUri</a>[]</code> | request_uri block. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion.property.targetRuleIds">targetRuleIds</a></code> | <code>string[]</code> | A list of target rule IDs under the WAF rule set to apply the preconfigured WAF exclusion. |

---

##### `targetRuleSet`<sup>Required</sup> <a name="targetRuleSet" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion.property.targetRuleSet"></a>

```typescript
public readonly targetRuleSet: string;
```

- *Type:* string

Target WAF rule set to apply the preconfigured WAF exclusion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_security_policy#target_rule_set ComputeRegionSecurityPolicy#target_rule_set}

---

##### `requestCookie`<sup>Optional</sup> <a name="requestCookie" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion.property.requestCookie"></a>

```typescript
public readonly requestCookie: IResolvable | ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookie[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookie">ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookie</a>[]

request_cookie block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_security_policy#request_cookie ComputeRegionSecurityPolicy#request_cookie}

---

##### `requestHeader`<sup>Optional</sup> <a name="requestHeader" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion.property.requestHeader"></a>

```typescript
public readonly requestHeader: IResolvable | ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeader">ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeader</a>[]

request_header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_security_policy#request_header ComputeRegionSecurityPolicy#request_header}

---

##### `requestQueryParam`<sup>Optional</sup> <a name="requestQueryParam" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion.property.requestQueryParam"></a>

```typescript
public readonly requestQueryParam: IResolvable | ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParam[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParam">ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParam</a>[]

request_query_param block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_security_policy#request_query_param ComputeRegionSecurityPolicy#request_query_param}

---

##### `requestUri`<sup>Optional</sup> <a name="requestUri" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion.property.requestUri"></a>

```typescript
public readonly requestUri: IResolvable | ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUri[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUri">ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUri</a>[]

request_uri block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_security_policy#request_uri ComputeRegionSecurityPolicy#request_uri}

---

##### `targetRuleIds`<sup>Optional</sup> <a name="targetRuleIds" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion.property.targetRuleIds"></a>

```typescript
public readonly targetRuleIds: string[];
```

- *Type:* string[]

A list of target rule IDs under the WAF rule set to apply the preconfigured WAF exclusion.

If omitted, it refers to all the rule IDs under the WAF rule set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_security_policy#target_rule_ids ComputeRegionSecurityPolicy#target_rule_ids}

---

### ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookie <a name="ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookie" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookie"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookie.Initializer"></a>

```typescript
import { computeRegionSecurityPolicy } from '@cdktf/provider-google'

const computeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookie: computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookie = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookie.property.operator">operator</a></code> | <code>string</code> | You can specify an exact match or a partial match by using a field operator and a field value. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookie.property.value">value</a></code> | <code>string</code> | A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookie.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

You can specify an exact match or a partial match by using a field operator and a field value.

Available options:
EQUALS: The operator matches if the field value equals the specified value.
STARTS_WITH: The operator matches if the field value starts with the specified value.
ENDS_WITH: The operator matches if the field value ends with the specified value.
CONTAINS: The operator matches if the field value contains the specified value.
EQUALS_ANY: The operator matches if the field value is any value. Possible values: ["CONTAINS", "ENDS_WITH", "EQUALS", "EQUALS_ANY", "STARTS_WITH"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_security_policy#operator ComputeRegionSecurityPolicy#operator}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookie.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation.

The field value must be given if the field operator is not EQUALS_ANY, and cannot be given if the field operator is EQUALS_ANY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_security_policy#value ComputeRegionSecurityPolicy#value}

---

### ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeader <a name="ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeader" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeader.Initializer"></a>

```typescript
import { computeRegionSecurityPolicy } from '@cdktf/provider-google'

const computeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeader: computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeader = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeader.property.operator">operator</a></code> | <code>string</code> | You can specify an exact match or a partial match by using a field operator and a field value. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeader.property.value">value</a></code> | <code>string</code> | A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeader.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

You can specify an exact match or a partial match by using a field operator and a field value.

Available options:
EQUALS: The operator matches if the field value equals the specified value.
STARTS_WITH: The operator matches if the field value starts with the specified value.
ENDS_WITH: The operator matches if the field value ends with the specified value.
CONTAINS: The operator matches if the field value contains the specified value.
EQUALS_ANY: The operator matches if the field value is any value. Possible values: ["CONTAINS", "ENDS_WITH", "EQUALS", "EQUALS_ANY", "STARTS_WITH"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_security_policy#operator ComputeRegionSecurityPolicy#operator}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeader.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation.

The field value must be given if the field operator is not EQUALS_ANY, and cannot be given if the field operator is EQUALS_ANY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_security_policy#value ComputeRegionSecurityPolicy#value}

---

### ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParam <a name="ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParam" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParam"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParam.Initializer"></a>

```typescript
import { computeRegionSecurityPolicy } from '@cdktf/provider-google'

const computeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParam: computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParam = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParam.property.operator">operator</a></code> | <code>string</code> | You can specify an exact match or a partial match by using a field operator and a field value. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParam.property.value">value</a></code> | <code>string</code> | A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParam.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

You can specify an exact match or a partial match by using a field operator and a field value.

Available options:
EQUALS: The operator matches if the field value equals the specified value.
STARTS_WITH: The operator matches if the field value starts with the specified value.
ENDS_WITH: The operator matches if the field value ends with the specified value.
CONTAINS: The operator matches if the field value contains the specified value.
EQUALS_ANY: The operator matches if the field value is any value. Possible values: ["CONTAINS", "ENDS_WITH", "EQUALS", "EQUALS_ANY", "STARTS_WITH"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_security_policy#operator ComputeRegionSecurityPolicy#operator}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParam.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation.

The field value must be given if the field operator is not EQUALS_ANY, and cannot be given if the field operator is EQUALS_ANY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_security_policy#value ComputeRegionSecurityPolicy#value}

---

### ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUri <a name="ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUri" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUri"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUri.Initializer"></a>

```typescript
import { computeRegionSecurityPolicy } from '@cdktf/provider-google'

const computeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUri: computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUri = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUri.property.operator">operator</a></code> | <code>string</code> | You can specify an exact match or a partial match by using a field operator and a field value. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUri.property.value">value</a></code> | <code>string</code> | A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUri.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

You can specify an exact match or a partial match by using a field operator and a field value.

Available options:
EQUALS: The operator matches if the field value equals the specified value.
STARTS_WITH: The operator matches if the field value starts with the specified value.
ENDS_WITH: The operator matches if the field value ends with the specified value.
CONTAINS: The operator matches if the field value contains the specified value.
EQUALS_ANY: The operator matches if the field value is any value. Possible values: ["CONTAINS", "ENDS_WITH", "EQUALS", "EQUALS_ANY", "STARTS_WITH"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_security_policy#operator ComputeRegionSecurityPolicy#operator}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUri.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation.

The field value must be given if the field operator is not EQUALS_ANY, and cannot be given if the field operator is EQUALS_ANY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_security_policy#value ComputeRegionSecurityPolicy#value}

---

### ComputeRegionSecurityPolicyRulesRateLimitOptions <a name="ComputeRegionSecurityPolicyRulesRateLimitOptions" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptions.Initializer"></a>

```typescript
import { computeRegionSecurityPolicy } from '@cdktf/provider-google'

const computeRegionSecurityPolicyRulesRateLimitOptions: computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptions.property.banDurationSec">banDurationSec</a></code> | <code>number</code> | Can only be specified if the action for the rule is "rate_based_ban". |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptions.property.banThreshold">banThreshold</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold">ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold</a></code> | ban_threshold block. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptions.property.conformAction">conformAction</a></code> | <code>string</code> | Action to take for requests that are under the configured rate limit threshold. Valid option is "allow" only. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptions.property.enforceOnKey">enforceOnKey</a></code> | <code>string</code> | Determines the key to enforce the rateLimitThreshold on. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptions.property.enforceOnKeyConfigs">enforceOnKeyConfigs</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigs">ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigs</a>[]</code> | enforce_on_key_configs block. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptions.property.enforceOnKeyName">enforceOnKeyName</a></code> | <code>string</code> | Rate limit key name applicable only for the following key types: HTTP_HEADER -- Name of the HTTP header whose value is taken as the key value. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptions.property.exceedAction">exceedAction</a></code> | <code>string</code> | Action to take for requests that are above the configured rate limit threshold, to deny with a specified HTTP response code. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptions.property.rateLimitThreshold">rateLimitThreshold</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold">ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold</a></code> | rate_limit_threshold block. |

---

##### `banDurationSec`<sup>Optional</sup> <a name="banDurationSec" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptions.property.banDurationSec"></a>

```typescript
public readonly banDurationSec: number;
```

- *Type:* number

Can only be specified if the action for the rule is "rate_based_ban".

If specified, determines the time (in seconds) the traffic will continue to be banned by the rate limit after the rate falls below the threshold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_security_policy#ban_duration_sec ComputeRegionSecurityPolicy#ban_duration_sec}

---

##### `banThreshold`<sup>Optional</sup> <a name="banThreshold" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptions.property.banThreshold"></a>

```typescript
public readonly banThreshold: ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold">ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold</a>

ban_threshold block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_security_policy#ban_threshold ComputeRegionSecurityPolicy#ban_threshold}

---

##### `conformAction`<sup>Optional</sup> <a name="conformAction" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptions.property.conformAction"></a>

```typescript
public readonly conformAction: string;
```

- *Type:* string

Action to take for requests that are under the configured rate limit threshold. Valid option is "allow" only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_security_policy#conform_action ComputeRegionSecurityPolicy#conform_action}

---

##### `enforceOnKey`<sup>Optional</sup> <a name="enforceOnKey" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptions.property.enforceOnKey"></a>

```typescript
public readonly enforceOnKey: string;
```

- *Type:* string

Determines the key to enforce the rateLimitThreshold on.

Possible values are:
* ALL: A single rate limit threshold is applied to all the requests matching this rule. This is the default value if "enforceOnKey" is not configured.
* IP: The source IP address of the request is the key. Each IP has this limit enforced separately.
* HTTP_HEADER: The value of the HTTP header whose name is configured under "enforceOnKeyName". The key value is truncated to the first 128 bytes of the header value. If no such header is present in the request, the key type defaults to ALL.
* XFF_IP: The first IP address (i.e. the originating client IP address) specified in the list of IPs under X-Forwarded-For HTTP header. If no such header is present or the value is not a valid IP, the key defaults to the source IP address of the request i.e. key type IP.
* HTTP_COOKIE: The value of the HTTP cookie whose name is configured under "enforceOnKeyName". The key value is truncated to the first 128 bytes of the cookie value. If no such cookie is present in the request, the key type defaults to ALL.
* HTTP_PATH: The URL path of the HTTP request. The key value is truncated to the first 128 bytes.
* SNI: Server name indication in the TLS session of the HTTPS request. The key value is truncated to the first 128 bytes. The key type defaults to ALL on a HTTP session.
* REGION_CODE: The country/region from which the request originates.
* TLS_JA3_FINGERPRINT: JA3 TLS/SSL fingerprint if the client connects using HTTPS, HTTP/2 or HTTP/3. If not available, the key type defaults to ALL.
* TLS_JA4_FINGERPRINT: JA4 TLS/SSL fingerprint if the client connects using HTTPS, HTTP/2 or HTTP/3. If not available, the key type defaults to ALL.
* USER_IP: The IP address of the originating client, which is resolved based on "userIpRequestHeaders" configured with the security policy. If there is no "userIpRequestHeaders" configuration or an IP address cannot be resolved from it, the key type defaults to IP. Possible values: ["ALL", "IP", "HTTP_HEADER", "XFF_IP", "HTTP_COOKIE", "HTTP_PATH", "SNI", "REGION_CODE", "TLS_JA3_FINGERPRINT", "TLS_JA4_FINGERPRINT", "USER_IP"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_security_policy#enforce_on_key ComputeRegionSecurityPolicy#enforce_on_key}

---

##### `enforceOnKeyConfigs`<sup>Optional</sup> <a name="enforceOnKeyConfigs" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptions.property.enforceOnKeyConfigs"></a>

```typescript
public readonly enforceOnKeyConfigs: IResolvable | ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigs">ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigs</a>[]

enforce_on_key_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_security_policy#enforce_on_key_configs ComputeRegionSecurityPolicy#enforce_on_key_configs}

---

##### `enforceOnKeyName`<sup>Optional</sup> <a name="enforceOnKeyName" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptions.property.enforceOnKeyName"></a>

```typescript
public readonly enforceOnKeyName: string;
```

- *Type:* string

Rate limit key name applicable only for the following key types: HTTP_HEADER -- Name of the HTTP header whose value is taken as the key value.

HTTP_COOKIE -- Name of the HTTP cookie whose value is taken as the key value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_security_policy#enforce_on_key_name ComputeRegionSecurityPolicy#enforce_on_key_name}

---

##### `exceedAction`<sup>Optional</sup> <a name="exceedAction" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptions.property.exceedAction"></a>

```typescript
public readonly exceedAction: string;
```

- *Type:* string

Action to take for requests that are above the configured rate limit threshold, to deny with a specified HTTP response code.

Valid options are deny(STATUS), where valid values for STATUS are 403, 404, 429, and 502.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_security_policy#exceed_action ComputeRegionSecurityPolicy#exceed_action}

---

##### `rateLimitThreshold`<sup>Optional</sup> <a name="rateLimitThreshold" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptions.property.rateLimitThreshold"></a>

```typescript
public readonly rateLimitThreshold: ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold">ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold</a>

rate_limit_threshold block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_security_policy#rate_limit_threshold ComputeRegionSecurityPolicy#rate_limit_threshold}

---

### ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold <a name="ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold.Initializer"></a>

```typescript
import { computeRegionSecurityPolicy } from '@cdktf/provider-google'

const computeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold: computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold.property.count">count</a></code> | <code>number</code> | Number of HTTP(S) requests for calculating the threshold. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold.property.intervalSec">intervalSec</a></code> | <code>number</code> | Interval over which the threshold is computed. |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

Number of HTTP(S) requests for calculating the threshold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_security_policy#count ComputeRegionSecurityPolicy#count}

---

##### `intervalSec`<sup>Optional</sup> <a name="intervalSec" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold.property.intervalSec"></a>

```typescript
public readonly intervalSec: number;
```

- *Type:* number

Interval over which the threshold is computed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_security_policy#interval_sec ComputeRegionSecurityPolicy#interval_sec}

---

### ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigs <a name="ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigs" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigs.Initializer"></a>

```typescript
import { computeRegionSecurityPolicy } from '@cdktf/provider-google'

const computeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigs: computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigs.property.enforceOnKeyName">enforceOnKeyName</a></code> | <code>string</code> | Rate limit key name applicable only for the following key types: HTTP_HEADER -- Name of the HTTP header whose value is taken as the key value. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigs.property.enforceOnKeyType">enforceOnKeyType</a></code> | <code>string</code> | Determines the key to enforce the rateLimitThreshold on. |

---

##### `enforceOnKeyName`<sup>Optional</sup> <a name="enforceOnKeyName" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigs.property.enforceOnKeyName"></a>

```typescript
public readonly enforceOnKeyName: string;
```

- *Type:* string

Rate limit key name applicable only for the following key types: HTTP_HEADER -- Name of the HTTP header whose value is taken as the key value.

HTTP_COOKIE -- Name of the HTTP cookie whose value is taken as the key value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_security_policy#enforce_on_key_name ComputeRegionSecurityPolicy#enforce_on_key_name}

---

##### `enforceOnKeyType`<sup>Optional</sup> <a name="enforceOnKeyType" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigs.property.enforceOnKeyType"></a>

```typescript
public readonly enforceOnKeyType: string;
```

- *Type:* string

Determines the key to enforce the rateLimitThreshold on.

Possible values are:
* ALL: A single rate limit threshold is applied to all the requests matching this rule. This is the default value if "enforceOnKeyConfigs" is not configured.
* IP: The source IP address of the request is the key. Each IP has this limit enforced separately.
* HTTP_HEADER: The value of the HTTP header whose name is configured under "enforceOnKeyName". The key value is truncated to the first 128 bytes of the header value. If no such header is present in the request, the key type defaults to ALL.
* XFF_IP: The first IP address (i.e. the originating client IP address) specified in the list of IPs under X-Forwarded-For HTTP header. If no such header is present or the value is not a valid IP, the key defaults to the source IP address of the request i.e. key type IP.
* HTTP_COOKIE: The value of the HTTP cookie whose name is configured under "enforceOnKeyName". The key value is truncated to the first 128 bytes of the cookie value. If no such cookie is present in the request, the key type defaults to ALL.
* HTTP_PATH: The URL path of the HTTP request. The key value is truncated to the first 128 bytes.
* SNI: Server name indication in the TLS session of the HTTPS request. The key value is truncated to the first 128 bytes. The key type defaults to ALL on a HTTP session.
* REGION_CODE: The country/region from which the request originates.
* TLS_JA3_FINGERPRINT: JA3 TLS/SSL fingerprint if the client connects using HTTPS, HTTP/2 or HTTP/3. If not available, the key type defaults to ALL.
* TLS_JA4_FINGERPRINT: JA4 TLS/SSL fingerprint if the client connects using HTTPS, HTTP/2 or HTTP/3. If not available, the key type defaults to ALL.
* USER_IP: The IP address of the originating client, which is resolved based on "userIpRequestHeaders" configured with the security policy. If there is no "userIpRequestHeaders" configuration or an IP address cannot be resolved from it, the key type defaults to IP. Possible values: ["ALL", "IP", "HTTP_HEADER", "XFF_IP", "HTTP_COOKIE", "HTTP_PATH", "SNI", "REGION_CODE", "TLS_JA3_FINGERPRINT", "TLS_JA4_FINGERPRINT", "USER_IP"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_security_policy#enforce_on_key_type ComputeRegionSecurityPolicy#enforce_on_key_type}

---

### ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold <a name="ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold.Initializer"></a>

```typescript
import { computeRegionSecurityPolicy } from '@cdktf/provider-google'

const computeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold: computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold.property.count">count</a></code> | <code>number</code> | Number of HTTP(S) requests for calculating the threshold. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold.property.intervalSec">intervalSec</a></code> | <code>number</code> | Interval over which the threshold is computed. |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

Number of HTTP(S) requests for calculating the threshold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_security_policy#count ComputeRegionSecurityPolicy#count}

---

##### `intervalSec`<sup>Optional</sup> <a name="intervalSec" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold.property.intervalSec"></a>

```typescript
public readonly intervalSec: number;
```

- *Type:* number

Interval over which the threshold is computed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_security_policy#interval_sec ComputeRegionSecurityPolicy#interval_sec}

---

### ComputeRegionSecurityPolicyTimeouts <a name="ComputeRegionSecurityPolicyTimeouts" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeouts.Initializer"></a>

```typescript
import { computeRegionSecurityPolicy } from '@cdktf/provider-google'

const computeRegionSecurityPolicyTimeouts: computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_security_policy#create ComputeRegionSecurityPolicy#create}. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_security_policy#delete ComputeRegionSecurityPolicy#delete}. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_security_policy#update ComputeRegionSecurityPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_security_policy#create ComputeRegionSecurityPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_security_policy#delete ComputeRegionSecurityPolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_security_policy#update ComputeRegionSecurityPolicy#update}.

---

### ComputeRegionSecurityPolicyUserDefinedFields <a name="ComputeRegionSecurityPolicyUserDefinedFields" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFields"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFields.Initializer"></a>

```typescript
import { computeRegionSecurityPolicy } from '@cdktf/provider-google'

const computeRegionSecurityPolicyUserDefinedFields: computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFields = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFields.property.base">base</a></code> | <code>string</code> | The base relative to which 'offset' is measured. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFields.property.mask">mask</a></code> | <code>string</code> | If specified, apply this mask (bitwise AND) to the field to ignore bits before matching. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFields.property.name">name</a></code> | <code>string</code> | The name of this field. Must be unique within the policy. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFields.property.offset">offset</a></code> | <code>number</code> | Offset of the first byte of the field (in network byte order) relative to 'base'. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFields.property.size">size</a></code> | <code>number</code> | Size of the field in bytes. Valid values: 1-4. |

---

##### `base`<sup>Required</sup> <a name="base" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFields.property.base"></a>

```typescript
public readonly base: string;
```

- *Type:* string

The base relative to which 'offset' is measured.

Possible values are:
- IPV4: Points to the beginning of the IPv4 header.
- IPV6: Points to the beginning of the IPv6 header.
- TCP: Points to the beginning of the TCP header, skipping over any IPv4 options or IPv6 extension headers. Not present for non-first fragments.
- UDP: Points to the beginning of the UDP header, skipping over any IPv4 options or IPv6 extension headers. Not present for non-first fragments. Possible values: ["IPV4", "IPV6", "TCP", "UDP"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_security_policy#base ComputeRegionSecurityPolicy#base}

---

##### `mask`<sup>Optional</sup> <a name="mask" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFields.property.mask"></a>

```typescript
public readonly mask: string;
```

- *Type:* string

If specified, apply this mask (bitwise AND) to the field to ignore bits before matching.

Encoded as a hexadecimal number (starting with "0x").
The last byte of the field (in network byte order) corresponds to the least significant byte of the mask.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_security_policy#mask ComputeRegionSecurityPolicy#mask}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFields.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of this field. Must be unique within the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_security_policy#name ComputeRegionSecurityPolicy#name}

---

##### `offset`<sup>Optional</sup> <a name="offset" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFields.property.offset"></a>

```typescript
public readonly offset: number;
```

- *Type:* number

Offset of the first byte of the field (in network byte order) relative to 'base'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_security_policy#offset ComputeRegionSecurityPolicy#offset}

---

##### `size`<sup>Optional</sup> <a name="size" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFields.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

Size of the field in bytes. Valid values: 1-4.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/compute_region_security_policy#size ComputeRegionSecurityPolicy#size}

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference <a name="ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.Initializer"></a>

```typescript
import { computeRegionSecurityPolicy } from '@cdktf/provider-google'

new computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.property.ddosProtectionInput">ddosProtectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.property.ddosProtection">ddosProtection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfig">ComputeRegionSecurityPolicyDdosProtectionConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ddosProtectionInput`<sup>Optional</sup> <a name="ddosProtectionInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.property.ddosProtectionInput"></a>

```typescript
public readonly ddosProtectionInput: string;
```

- *Type:* string

---

##### `ddosProtection`<sup>Required</sup> <a name="ddosProtection" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.property.ddosProtection"></a>

```typescript
public readonly ddosProtection: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeRegionSecurityPolicyDdosProtectionConfig;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfig">ComputeRegionSecurityPolicyDdosProtectionConfig</a>

---


### ComputeRegionSecurityPolicyRulesList <a name="ComputeRegionSecurityPolicyRulesList" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesList.Initializer"></a>

```typescript
import { computeRegionSecurityPolicy } from '@cdktf/provider-google'

new computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesList.get"></a>

```typescript
public get(index: number): ComputeRegionSecurityPolicyRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRules">ComputeRegionSecurityPolicyRules</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeRegionSecurityPolicyRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRules">ComputeRegionSecurityPolicyRules</a>[]

---


### ComputeRegionSecurityPolicyRulesMatchConfigOutputReference <a name="ComputeRegionSecurityPolicyRulesMatchConfigOutputReference" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.Initializer"></a>

```typescript
import { computeRegionSecurityPolicy } from '@cdktf/provider-google'

new computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.resetSrcIpRanges">resetSrcIpRanges</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSrcIpRanges` <a name="resetSrcIpRanges" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.resetSrcIpRanges"></a>

```typescript
public resetSrcIpRanges(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.property.srcIpRangesInput">srcIpRangesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.property.srcIpRanges">srcIpRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfig">ComputeRegionSecurityPolicyRulesMatchConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `srcIpRangesInput`<sup>Optional</sup> <a name="srcIpRangesInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.property.srcIpRangesInput"></a>

```typescript
public readonly srcIpRangesInput: string[];
```

- *Type:* string[]

---

##### `srcIpRanges`<sup>Required</sup> <a name="srcIpRanges" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.property.srcIpRanges"></a>

```typescript
public readonly srcIpRanges: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeRegionSecurityPolicyRulesMatchConfig;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfig">ComputeRegionSecurityPolicyRulesMatchConfig</a>

---


### ComputeRegionSecurityPolicyRulesMatchExprOutputReference <a name="ComputeRegionSecurityPolicyRulesMatchExprOutputReference" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.Initializer"></a>

```typescript
import { computeRegionSecurityPolicy } from '@cdktf/provider-google'

new computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExpr">ComputeRegionSecurityPolicyRulesMatchExpr</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeRegionSecurityPolicyRulesMatchExpr;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExpr">ComputeRegionSecurityPolicyRulesMatchExpr</a>

---


### ComputeRegionSecurityPolicyRulesMatchOutputReference <a name="ComputeRegionSecurityPolicyRulesMatchOutputReference" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.Initializer"></a>

```typescript
import { computeRegionSecurityPolicy } from '@cdktf/provider-google'

new computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.putConfig">putConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.putExpr">putExpr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.resetConfig">resetConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.resetExpr">resetExpr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.resetVersionedExpr">resetVersionedExpr</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConfig` <a name="putConfig" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.putConfig"></a>

```typescript
public putConfig(value: ComputeRegionSecurityPolicyRulesMatchConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfig">ComputeRegionSecurityPolicyRulesMatchConfig</a>

---

##### `putExpr` <a name="putExpr" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.putExpr"></a>

```typescript
public putExpr(value: ComputeRegionSecurityPolicyRulesMatchExpr): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.putExpr.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExpr">ComputeRegionSecurityPolicyRulesMatchExpr</a>

---

##### `resetConfig` <a name="resetConfig" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.resetConfig"></a>

```typescript
public resetConfig(): void
```

##### `resetExpr` <a name="resetExpr" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.resetExpr"></a>

```typescript
public resetExpr(): void
```

##### `resetVersionedExpr` <a name="resetVersionedExpr" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.resetVersionedExpr"></a>

```typescript
public resetVersionedExpr(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.property.config">config</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference">ComputeRegionSecurityPolicyRulesMatchConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.property.expr">expr</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference">ComputeRegionSecurityPolicyRulesMatchExprOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.property.configInput">configInput</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfig">ComputeRegionSecurityPolicyRulesMatchConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.property.exprInput">exprInput</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExpr">ComputeRegionSecurityPolicyRulesMatchExpr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.property.versionedExprInput">versionedExprInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.property.versionedExpr">versionedExpr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatch">ComputeRegionSecurityPolicyRulesMatch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.property.config"></a>

```typescript
public readonly config: ComputeRegionSecurityPolicyRulesMatchConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference">ComputeRegionSecurityPolicyRulesMatchConfigOutputReference</a>

---

##### `expr`<sup>Required</sup> <a name="expr" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.property.expr"></a>

```typescript
public readonly expr: ComputeRegionSecurityPolicyRulesMatchExprOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference">ComputeRegionSecurityPolicyRulesMatchExprOutputReference</a>

---

##### `configInput`<sup>Optional</sup> <a name="configInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.property.configInput"></a>

```typescript
public readonly configInput: ComputeRegionSecurityPolicyRulesMatchConfig;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfig">ComputeRegionSecurityPolicyRulesMatchConfig</a>

---

##### `exprInput`<sup>Optional</sup> <a name="exprInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.property.exprInput"></a>

```typescript
public readonly exprInput: ComputeRegionSecurityPolicyRulesMatchExpr;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExpr">ComputeRegionSecurityPolicyRulesMatchExpr</a>

---

##### `versionedExprInput`<sup>Optional</sup> <a name="versionedExprInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.property.versionedExprInput"></a>

```typescript
public readonly versionedExprInput: string;
```

- *Type:* string

---

##### `versionedExpr`<sup>Required</sup> <a name="versionedExpr" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.property.versionedExpr"></a>

```typescript
public readonly versionedExpr: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeRegionSecurityPolicyRulesMatch;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatch">ComputeRegionSecurityPolicyRulesMatch</a>

---


### ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference <a name="ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.Initializer"></a>

```typescript
import { computeRegionSecurityPolicy } from '@cdktf/provider-google'

new computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.putUserDefinedFields">putUserDefinedFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.resetDestIpRanges">resetDestIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.resetDestPorts">resetDestPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.resetIpProtocols">resetIpProtocols</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.resetSrcAsns">resetSrcAsns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.resetSrcIpRanges">resetSrcIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.resetSrcPorts">resetSrcPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.resetSrcRegionCodes">resetSrcRegionCodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.resetUserDefinedFields">resetUserDefinedFields</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putUserDefinedFields` <a name="putUserDefinedFields" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.putUserDefinedFields"></a>

```typescript
public putUserDefinedFields(value: IResolvable | ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFields[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.putUserDefinedFields.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFields">ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFields</a>[]

---

##### `resetDestIpRanges` <a name="resetDestIpRanges" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.resetDestIpRanges"></a>

```typescript
public resetDestIpRanges(): void
```

##### `resetDestPorts` <a name="resetDestPorts" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.resetDestPorts"></a>

```typescript
public resetDestPorts(): void
```

##### `resetIpProtocols` <a name="resetIpProtocols" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.resetIpProtocols"></a>

```typescript
public resetIpProtocols(): void
```

##### `resetSrcAsns` <a name="resetSrcAsns" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.resetSrcAsns"></a>

```typescript
public resetSrcAsns(): void
```

##### `resetSrcIpRanges` <a name="resetSrcIpRanges" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.resetSrcIpRanges"></a>

```typescript
public resetSrcIpRanges(): void
```

##### `resetSrcPorts` <a name="resetSrcPorts" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.resetSrcPorts"></a>

```typescript
public resetSrcPorts(): void
```

##### `resetSrcRegionCodes` <a name="resetSrcRegionCodes" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.resetSrcRegionCodes"></a>

```typescript
public resetSrcRegionCodes(): void
```

##### `resetUserDefinedFields` <a name="resetUserDefinedFields" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.resetUserDefinedFields"></a>

```typescript
public resetUserDefinedFields(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.userDefinedFields">userDefinedFields</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList">ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.destIpRangesInput">destIpRangesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.destPortsInput">destPortsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.ipProtocolsInput">ipProtocolsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.srcAsnsInput">srcAsnsInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.srcIpRangesInput">srcIpRangesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.srcPortsInput">srcPortsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.srcRegionCodesInput">srcRegionCodesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.userDefinedFieldsInput">userDefinedFieldsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFields">ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFields</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.destIpRanges">destIpRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.destPorts">destPorts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.ipProtocols">ipProtocols</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.srcAsns">srcAsns</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.srcIpRanges">srcIpRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.srcPorts">srcPorts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.srcRegionCodes">srcRegionCodes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatch">ComputeRegionSecurityPolicyRulesNetworkMatch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `userDefinedFields`<sup>Required</sup> <a name="userDefinedFields" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.userDefinedFields"></a>

```typescript
public readonly userDefinedFields: ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList">ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList</a>

---

##### `destIpRangesInput`<sup>Optional</sup> <a name="destIpRangesInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.destIpRangesInput"></a>

```typescript
public readonly destIpRangesInput: string[];
```

- *Type:* string[]

---

##### `destPortsInput`<sup>Optional</sup> <a name="destPortsInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.destPortsInput"></a>

```typescript
public readonly destPortsInput: string[];
```

- *Type:* string[]

---

##### `ipProtocolsInput`<sup>Optional</sup> <a name="ipProtocolsInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.ipProtocolsInput"></a>

```typescript
public readonly ipProtocolsInput: string[];
```

- *Type:* string[]

---

##### `srcAsnsInput`<sup>Optional</sup> <a name="srcAsnsInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.srcAsnsInput"></a>

```typescript
public readonly srcAsnsInput: number[];
```

- *Type:* number[]

---

##### `srcIpRangesInput`<sup>Optional</sup> <a name="srcIpRangesInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.srcIpRangesInput"></a>

```typescript
public readonly srcIpRangesInput: string[];
```

- *Type:* string[]

---

##### `srcPortsInput`<sup>Optional</sup> <a name="srcPortsInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.srcPortsInput"></a>

```typescript
public readonly srcPortsInput: string[];
```

- *Type:* string[]

---

##### `srcRegionCodesInput`<sup>Optional</sup> <a name="srcRegionCodesInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.srcRegionCodesInput"></a>

```typescript
public readonly srcRegionCodesInput: string[];
```

- *Type:* string[]

---

##### `userDefinedFieldsInput`<sup>Optional</sup> <a name="userDefinedFieldsInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.userDefinedFieldsInput"></a>

```typescript
public readonly userDefinedFieldsInput: IResolvable | ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFields[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFields">ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFields</a>[]

---

##### `destIpRanges`<sup>Required</sup> <a name="destIpRanges" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.destIpRanges"></a>

```typescript
public readonly destIpRanges: string[];
```

- *Type:* string[]

---

##### `destPorts`<sup>Required</sup> <a name="destPorts" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.destPorts"></a>

```typescript
public readonly destPorts: string[];
```

- *Type:* string[]

---

##### `ipProtocols`<sup>Required</sup> <a name="ipProtocols" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.ipProtocols"></a>

```typescript
public readonly ipProtocols: string[];
```

- *Type:* string[]

---

##### `srcAsns`<sup>Required</sup> <a name="srcAsns" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.srcAsns"></a>

```typescript
public readonly srcAsns: number[];
```

- *Type:* number[]

---

##### `srcIpRanges`<sup>Required</sup> <a name="srcIpRanges" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.srcIpRanges"></a>

```typescript
public readonly srcIpRanges: string[];
```

- *Type:* string[]

---

##### `srcPorts`<sup>Required</sup> <a name="srcPorts" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.srcPorts"></a>

```typescript
public readonly srcPorts: string[];
```

- *Type:* string[]

---

##### `srcRegionCodes`<sup>Required</sup> <a name="srcRegionCodes" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.srcRegionCodes"></a>

```typescript
public readonly srcRegionCodes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeRegionSecurityPolicyRulesNetworkMatch;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatch">ComputeRegionSecurityPolicyRulesNetworkMatch</a>

---


### ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList <a name="ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.Initializer"></a>

```typescript
import { computeRegionSecurityPolicy } from '@cdktf/provider-google'

new computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.get"></a>

```typescript
public get(index: number): ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFields">ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFields</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFields[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFields">ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFields</a>[]

---


### ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference <a name="ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.Initializer"></a>

```typescript
import { computeRegionSecurityPolicy } from '@cdktf/provider-google'

new computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFields">ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFields</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFields;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFields">ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFields</a>

---


### ComputeRegionSecurityPolicyRulesOutputReference <a name="ComputeRegionSecurityPolicyRulesOutputReference" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.Initializer"></a>

```typescript
import { computeRegionSecurityPolicy } from '@cdktf/provider-google'

new computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.putMatch">putMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.putNetworkMatch">putNetworkMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.putPreconfiguredWafConfig">putPreconfiguredWafConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.putRateLimitOptions">putRateLimitOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.resetMatch">resetMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.resetNetworkMatch">resetNetworkMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.resetPreconfiguredWafConfig">resetPreconfiguredWafConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.resetPreview">resetPreview</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.resetRateLimitOptions">resetRateLimitOptions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMatch` <a name="putMatch" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.putMatch"></a>

```typescript
public putMatch(value: ComputeRegionSecurityPolicyRulesMatch): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.putMatch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatch">ComputeRegionSecurityPolicyRulesMatch</a>

---

##### `putNetworkMatch` <a name="putNetworkMatch" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.putNetworkMatch"></a>

```typescript
public putNetworkMatch(value: ComputeRegionSecurityPolicyRulesNetworkMatch): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.putNetworkMatch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatch">ComputeRegionSecurityPolicyRulesNetworkMatch</a>

---

##### `putPreconfiguredWafConfig` <a name="putPreconfiguredWafConfig" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.putPreconfiguredWafConfig"></a>

```typescript
public putPreconfiguredWafConfig(value: ComputeRegionSecurityPolicyRulesPreconfiguredWafConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.putPreconfiguredWafConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfig">ComputeRegionSecurityPolicyRulesPreconfiguredWafConfig</a>

---

##### `putRateLimitOptions` <a name="putRateLimitOptions" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.putRateLimitOptions"></a>

```typescript
public putRateLimitOptions(value: ComputeRegionSecurityPolicyRulesRateLimitOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.putRateLimitOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptions">ComputeRegionSecurityPolicyRulesRateLimitOptions</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetMatch` <a name="resetMatch" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.resetMatch"></a>

```typescript
public resetMatch(): void
```

##### `resetNetworkMatch` <a name="resetNetworkMatch" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.resetNetworkMatch"></a>

```typescript
public resetNetworkMatch(): void
```

##### `resetPreconfiguredWafConfig` <a name="resetPreconfiguredWafConfig" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.resetPreconfiguredWafConfig"></a>

```typescript
public resetPreconfiguredWafConfig(): void
```

##### `resetPreview` <a name="resetPreview" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.resetPreview"></a>

```typescript
public resetPreview(): void
```

##### `resetRateLimitOptions` <a name="resetRateLimitOptions" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.resetRateLimitOptions"></a>

```typescript
public resetRateLimitOptions(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.property.match">match</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference">ComputeRegionSecurityPolicyRulesMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.property.networkMatch">networkMatch</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference">ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.property.preconfiguredWafConfig">preconfiguredWafConfig</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference">ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.property.rateLimitOptions">rateLimitOptions</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference">ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.property.matchInput">matchInput</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatch">ComputeRegionSecurityPolicyRulesMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.property.networkMatchInput">networkMatchInput</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatch">ComputeRegionSecurityPolicyRulesNetworkMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.property.preconfiguredWafConfigInput">preconfiguredWafConfigInput</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfig">ComputeRegionSecurityPolicyRulesPreconfiguredWafConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.property.previewInput">previewInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.property.priorityInput">priorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.property.rateLimitOptionsInput">rateLimitOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptions">ComputeRegionSecurityPolicyRulesRateLimitOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.property.preview">preview</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRules">ComputeRegionSecurityPolicyRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.property.match"></a>

```typescript
public readonly match: ComputeRegionSecurityPolicyRulesMatchOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference">ComputeRegionSecurityPolicyRulesMatchOutputReference</a>

---

##### `networkMatch`<sup>Required</sup> <a name="networkMatch" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.property.networkMatch"></a>

```typescript
public readonly networkMatch: ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference">ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference</a>

---

##### `preconfiguredWafConfig`<sup>Required</sup> <a name="preconfiguredWafConfig" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.property.preconfiguredWafConfig"></a>

```typescript
public readonly preconfiguredWafConfig: ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference">ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference</a>

---

##### `rateLimitOptions`<sup>Required</sup> <a name="rateLimitOptions" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.property.rateLimitOptions"></a>

```typescript
public readonly rateLimitOptions: ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference">ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `matchInput`<sup>Optional</sup> <a name="matchInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.property.matchInput"></a>

```typescript
public readonly matchInput: ComputeRegionSecurityPolicyRulesMatch;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatch">ComputeRegionSecurityPolicyRulesMatch</a>

---

##### `networkMatchInput`<sup>Optional</sup> <a name="networkMatchInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.property.networkMatchInput"></a>

```typescript
public readonly networkMatchInput: ComputeRegionSecurityPolicyRulesNetworkMatch;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatch">ComputeRegionSecurityPolicyRulesNetworkMatch</a>

---

##### `preconfiguredWafConfigInput`<sup>Optional</sup> <a name="preconfiguredWafConfigInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.property.preconfiguredWafConfigInput"></a>

```typescript
public readonly preconfiguredWafConfigInput: ComputeRegionSecurityPolicyRulesPreconfiguredWafConfig;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfig">ComputeRegionSecurityPolicyRulesPreconfiguredWafConfig</a>

---

##### `previewInput`<sup>Optional</sup> <a name="previewInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.property.previewInput"></a>

```typescript
public readonly previewInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.property.priorityInput"></a>

```typescript
public readonly priorityInput: number;
```

- *Type:* number

---

##### `rateLimitOptionsInput`<sup>Optional</sup> <a name="rateLimitOptionsInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.property.rateLimitOptionsInput"></a>

```typescript
public readonly rateLimitOptionsInput: ComputeRegionSecurityPolicyRulesRateLimitOptions;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptions">ComputeRegionSecurityPolicyRulesRateLimitOptions</a>

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `preview`<sup>Required</sup> <a name="preview" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.property.preview"></a>

```typescript
public readonly preview: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeRegionSecurityPolicyRules;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRules">ComputeRegionSecurityPolicyRules</a>

---


### ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList <a name="ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.Initializer"></a>

```typescript
import { computeRegionSecurityPolicy } from '@cdktf/provider-google'

new computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.get"></a>

```typescript
public get(index: number): ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion">ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion">ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion</a>[]

---


### ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference <a name="ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.Initializer"></a>

```typescript
import { computeRegionSecurityPolicy } from '@cdktf/provider-google'

new computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.putRequestCookie">putRequestCookie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.putRequestHeader">putRequestHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.putRequestQueryParam">putRequestQueryParam</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.putRequestUri">putRequestUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.resetRequestCookie">resetRequestCookie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.resetRequestHeader">resetRequestHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.resetRequestQueryParam">resetRequestQueryParam</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.resetRequestUri">resetRequestUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.resetTargetRuleIds">resetTargetRuleIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRequestCookie` <a name="putRequestCookie" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.putRequestCookie"></a>

```typescript
public putRequestCookie(value: IResolvable | ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookie[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.putRequestCookie.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookie">ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookie</a>[]

---

##### `putRequestHeader` <a name="putRequestHeader" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.putRequestHeader"></a>

```typescript
public putRequestHeader(value: IResolvable | ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeader[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.putRequestHeader.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeader">ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeader</a>[]

---

##### `putRequestQueryParam` <a name="putRequestQueryParam" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.putRequestQueryParam"></a>

```typescript
public putRequestQueryParam(value: IResolvable | ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParam[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.putRequestQueryParam.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParam">ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParam</a>[]

---

##### `putRequestUri` <a name="putRequestUri" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.putRequestUri"></a>

```typescript
public putRequestUri(value: IResolvable | ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUri[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.putRequestUri.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUri">ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUri</a>[]

---

##### `resetRequestCookie` <a name="resetRequestCookie" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.resetRequestCookie"></a>

```typescript
public resetRequestCookie(): void
```

##### `resetRequestHeader` <a name="resetRequestHeader" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.resetRequestHeader"></a>

```typescript
public resetRequestHeader(): void
```

##### `resetRequestQueryParam` <a name="resetRequestQueryParam" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.resetRequestQueryParam"></a>

```typescript
public resetRequestQueryParam(): void
```

##### `resetRequestUri` <a name="resetRequestUri" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.resetRequestUri"></a>

```typescript
public resetRequestUri(): void
```

##### `resetTargetRuleIds` <a name="resetTargetRuleIds" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.resetTargetRuleIds"></a>

```typescript
public resetTargetRuleIds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.requestCookie">requestCookie</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList">ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.requestHeader">requestHeader</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList">ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.requestQueryParam">requestQueryParam</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList">ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.requestUri">requestUri</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList">ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.requestCookieInput">requestCookieInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookie">ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookie</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.requestHeaderInput">requestHeaderInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeader">ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeader</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.requestQueryParamInput">requestQueryParamInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParam">ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParam</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.requestUriInput">requestUriInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUri">ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUri</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.targetRuleIdsInput">targetRuleIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.targetRuleSetInput">targetRuleSetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.targetRuleIds">targetRuleIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.targetRuleSet">targetRuleSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion">ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `requestCookie`<sup>Required</sup> <a name="requestCookie" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.requestCookie"></a>

```typescript
public readonly requestCookie: ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList">ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList</a>

---

##### `requestHeader`<sup>Required</sup> <a name="requestHeader" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.requestHeader"></a>

```typescript
public readonly requestHeader: ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList">ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList</a>

---

##### `requestQueryParam`<sup>Required</sup> <a name="requestQueryParam" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.requestQueryParam"></a>

```typescript
public readonly requestQueryParam: ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList">ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList</a>

---

##### `requestUri`<sup>Required</sup> <a name="requestUri" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.requestUri"></a>

```typescript
public readonly requestUri: ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList">ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList</a>

---

##### `requestCookieInput`<sup>Optional</sup> <a name="requestCookieInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.requestCookieInput"></a>

```typescript
public readonly requestCookieInput: IResolvable | ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookie[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookie">ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookie</a>[]

---

##### `requestHeaderInput`<sup>Optional</sup> <a name="requestHeaderInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.requestHeaderInput"></a>

```typescript
public readonly requestHeaderInput: IResolvable | ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeader">ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeader</a>[]

---

##### `requestQueryParamInput`<sup>Optional</sup> <a name="requestQueryParamInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.requestQueryParamInput"></a>

```typescript
public readonly requestQueryParamInput: IResolvable | ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParam[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParam">ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParam</a>[]

---

##### `requestUriInput`<sup>Optional</sup> <a name="requestUriInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.requestUriInput"></a>

```typescript
public readonly requestUriInput: IResolvable | ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUri[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUri">ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUri</a>[]

---

##### `targetRuleIdsInput`<sup>Optional</sup> <a name="targetRuleIdsInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.targetRuleIdsInput"></a>

```typescript
public readonly targetRuleIdsInput: string[];
```

- *Type:* string[]

---

##### `targetRuleSetInput`<sup>Optional</sup> <a name="targetRuleSetInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.targetRuleSetInput"></a>

```typescript
public readonly targetRuleSetInput: string;
```

- *Type:* string

---

##### `targetRuleIds`<sup>Required</sup> <a name="targetRuleIds" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.targetRuleIds"></a>

```typescript
public readonly targetRuleIds: string[];
```

- *Type:* string[]

---

##### `targetRuleSet`<sup>Required</sup> <a name="targetRuleSet" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.targetRuleSet"></a>

```typescript
public readonly targetRuleSet: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion">ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion</a>

---


### ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList <a name="ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.Initializer"></a>

```typescript
import { computeRegionSecurityPolicy } from '@cdktf/provider-google'

new computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.get"></a>

```typescript
public get(index: number): ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookie">ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookie</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookie[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookie">ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookie</a>[]

---


### ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference <a name="ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer"></a>

```typescript
import { computeRegionSecurityPolicy } from '@cdktf/provider-google'

new computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookie">ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookie</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookie;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookie">ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookie</a>

---


### ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList <a name="ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.Initializer"></a>

```typescript
import { computeRegionSecurityPolicy } from '@cdktf/provider-google'

new computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.get"></a>

```typescript
public get(index: number): ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeader">ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeader</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeader">ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeader</a>[]

---


### ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference <a name="ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer"></a>

```typescript
import { computeRegionSecurityPolicy } from '@cdktf/provider-google'

new computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeader">ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeader</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeader;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeader">ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeader</a>

---


### ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList <a name="ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.Initializer"></a>

```typescript
import { computeRegionSecurityPolicy } from '@cdktf/provider-google'

new computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.get"></a>

```typescript
public get(index: number): ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParam">ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParam</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParam[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParam">ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParam</a>[]

---


### ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference <a name="ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer"></a>

```typescript
import { computeRegionSecurityPolicy } from '@cdktf/provider-google'

new computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParam">ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParam</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParam;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParam">ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParam</a>

---


### ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList <a name="ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.Initializer"></a>

```typescript
import { computeRegionSecurityPolicy } from '@cdktf/provider-google'

new computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.get"></a>

```typescript
public get(index: number): ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUri">ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUri</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUri[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUri">ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUri</a>[]

---


### ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference <a name="ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer"></a>

```typescript
import { computeRegionSecurityPolicy } from '@cdktf/provider-google'

new computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUri">ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUri</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUri;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUri">ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUri</a>

---


### ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference <a name="ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.Initializer"></a>

```typescript
import { computeRegionSecurityPolicy } from '@cdktf/provider-google'

new computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.putExclusion">putExclusion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.resetExclusion">resetExclusion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExclusion` <a name="putExclusion" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.putExclusion"></a>

```typescript
public putExclusion(value: IResolvable | ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.putExclusion.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion">ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion</a>[]

---

##### `resetExclusion` <a name="resetExclusion" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.resetExclusion"></a>

```typescript
public resetExclusion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.property.exclusion">exclusion</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList">ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.property.exclusionInput">exclusionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion">ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfig">ComputeRegionSecurityPolicyRulesPreconfiguredWafConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `exclusion`<sup>Required</sup> <a name="exclusion" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.property.exclusion"></a>

```typescript
public readonly exclusion: ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList">ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList</a>

---

##### `exclusionInput`<sup>Optional</sup> <a name="exclusionInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.property.exclusionInput"></a>

```typescript
public readonly exclusionInput: IResolvable | ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion">ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeRegionSecurityPolicyRulesPreconfiguredWafConfig;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfig">ComputeRegionSecurityPolicyRulesPreconfiguredWafConfig</a>

---


### ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference <a name="ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.Initializer"></a>

```typescript
import { computeRegionSecurityPolicy } from '@cdktf/provider-google'

new computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.resetCount">resetCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.resetIntervalSec">resetIntervalSec</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCount` <a name="resetCount" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.resetCount"></a>

```typescript
public resetCount(): void
```

##### `resetIntervalSec` <a name="resetIntervalSec" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.resetIntervalSec"></a>

```typescript
public resetIntervalSec(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.property.countInput">countInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.property.intervalSecInput">intervalSecInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.property.intervalSec">intervalSec</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold">ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `countInput`<sup>Optional</sup> <a name="countInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.property.countInput"></a>

```typescript
public readonly countInput: number;
```

- *Type:* number

---

##### `intervalSecInput`<sup>Optional</sup> <a name="intervalSecInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.property.intervalSecInput"></a>

```typescript
public readonly intervalSecInput: number;
```

- *Type:* number

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `intervalSec`<sup>Required</sup> <a name="intervalSec" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.property.intervalSec"></a>

```typescript
public readonly intervalSec: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold">ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold</a>

---


### ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList <a name="ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.Initializer"></a>

```typescript
import { computeRegionSecurityPolicy } from '@cdktf/provider-google'

new computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.get"></a>

```typescript
public get(index: number): ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigs">ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigs">ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigs</a>[]

---


### ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference <a name="ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer"></a>

```typescript
import { computeRegionSecurityPolicy } from '@cdktf/provider-google'

new computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.resetEnforceOnKeyName">resetEnforceOnKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.resetEnforceOnKeyType">resetEnforceOnKeyType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnforceOnKeyName` <a name="resetEnforceOnKeyName" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.resetEnforceOnKeyName"></a>

```typescript
public resetEnforceOnKeyName(): void
```

##### `resetEnforceOnKeyType` <a name="resetEnforceOnKeyType" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.resetEnforceOnKeyType"></a>

```typescript
public resetEnforceOnKeyType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.enforceOnKeyNameInput">enforceOnKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.enforceOnKeyTypeInput">enforceOnKeyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.enforceOnKeyName">enforceOnKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.enforceOnKeyType">enforceOnKeyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigs">ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enforceOnKeyNameInput`<sup>Optional</sup> <a name="enforceOnKeyNameInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.enforceOnKeyNameInput"></a>

```typescript
public readonly enforceOnKeyNameInput: string;
```

- *Type:* string

---

##### `enforceOnKeyTypeInput`<sup>Optional</sup> <a name="enforceOnKeyTypeInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.enforceOnKeyTypeInput"></a>

```typescript
public readonly enforceOnKeyTypeInput: string;
```

- *Type:* string

---

##### `enforceOnKeyName`<sup>Required</sup> <a name="enforceOnKeyName" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.enforceOnKeyName"></a>

```typescript
public readonly enforceOnKeyName: string;
```

- *Type:* string

---

##### `enforceOnKeyType`<sup>Required</sup> <a name="enforceOnKeyType" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.enforceOnKeyType"></a>

```typescript
public readonly enforceOnKeyType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigs;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigs">ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigs</a>

---


### ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference <a name="ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.Initializer"></a>

```typescript
import { computeRegionSecurityPolicy } from '@cdktf/provider-google'

new computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.putBanThreshold">putBanThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.putEnforceOnKeyConfigs">putEnforceOnKeyConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.putRateLimitThreshold">putRateLimitThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.resetBanDurationSec">resetBanDurationSec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.resetBanThreshold">resetBanThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.resetConformAction">resetConformAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.resetEnforceOnKey">resetEnforceOnKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.resetEnforceOnKeyConfigs">resetEnforceOnKeyConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.resetEnforceOnKeyName">resetEnforceOnKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.resetExceedAction">resetExceedAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.resetRateLimitThreshold">resetRateLimitThreshold</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBanThreshold` <a name="putBanThreshold" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.putBanThreshold"></a>

```typescript
public putBanThreshold(value: ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.putBanThreshold.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold">ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold</a>

---

##### `putEnforceOnKeyConfigs` <a name="putEnforceOnKeyConfigs" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.putEnforceOnKeyConfigs"></a>

```typescript
public putEnforceOnKeyConfigs(value: IResolvable | ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.putEnforceOnKeyConfigs.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigs">ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigs</a>[]

---

##### `putRateLimitThreshold` <a name="putRateLimitThreshold" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.putRateLimitThreshold"></a>

```typescript
public putRateLimitThreshold(value: ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.putRateLimitThreshold.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold">ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold</a>

---

##### `resetBanDurationSec` <a name="resetBanDurationSec" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.resetBanDurationSec"></a>

```typescript
public resetBanDurationSec(): void
```

##### `resetBanThreshold` <a name="resetBanThreshold" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.resetBanThreshold"></a>

```typescript
public resetBanThreshold(): void
```

##### `resetConformAction` <a name="resetConformAction" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.resetConformAction"></a>

```typescript
public resetConformAction(): void
```

##### `resetEnforceOnKey` <a name="resetEnforceOnKey" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.resetEnforceOnKey"></a>

```typescript
public resetEnforceOnKey(): void
```

##### `resetEnforceOnKeyConfigs` <a name="resetEnforceOnKeyConfigs" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.resetEnforceOnKeyConfigs"></a>

```typescript
public resetEnforceOnKeyConfigs(): void
```

##### `resetEnforceOnKeyName` <a name="resetEnforceOnKeyName" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.resetEnforceOnKeyName"></a>

```typescript
public resetEnforceOnKeyName(): void
```

##### `resetExceedAction` <a name="resetExceedAction" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.resetExceedAction"></a>

```typescript
public resetExceedAction(): void
```

##### `resetRateLimitThreshold` <a name="resetRateLimitThreshold" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.resetRateLimitThreshold"></a>

```typescript
public resetRateLimitThreshold(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.banThreshold">banThreshold</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference">ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.enforceOnKeyConfigs">enforceOnKeyConfigs</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList">ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.rateLimitThreshold">rateLimitThreshold</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference">ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.banDurationSecInput">banDurationSecInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.banThresholdInput">banThresholdInput</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold">ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.conformActionInput">conformActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.enforceOnKeyConfigsInput">enforceOnKeyConfigsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigs">ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigs</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.enforceOnKeyInput">enforceOnKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.enforceOnKeyNameInput">enforceOnKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.exceedActionInput">exceedActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.rateLimitThresholdInput">rateLimitThresholdInput</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold">ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.banDurationSec">banDurationSec</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.conformAction">conformAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.enforceOnKey">enforceOnKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.enforceOnKeyName">enforceOnKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.exceedAction">exceedAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptions">ComputeRegionSecurityPolicyRulesRateLimitOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `banThreshold`<sup>Required</sup> <a name="banThreshold" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.banThreshold"></a>

```typescript
public readonly banThreshold: ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference">ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference</a>

---

##### `enforceOnKeyConfigs`<sup>Required</sup> <a name="enforceOnKeyConfigs" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.enforceOnKeyConfigs"></a>

```typescript
public readonly enforceOnKeyConfigs: ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList">ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList</a>

---

##### `rateLimitThreshold`<sup>Required</sup> <a name="rateLimitThreshold" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.rateLimitThreshold"></a>

```typescript
public readonly rateLimitThreshold: ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference">ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference</a>

---

##### `banDurationSecInput`<sup>Optional</sup> <a name="banDurationSecInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.banDurationSecInput"></a>

```typescript
public readonly banDurationSecInput: number;
```

- *Type:* number

---

##### `banThresholdInput`<sup>Optional</sup> <a name="banThresholdInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.banThresholdInput"></a>

```typescript
public readonly banThresholdInput: ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold">ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold</a>

---

##### `conformActionInput`<sup>Optional</sup> <a name="conformActionInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.conformActionInput"></a>

```typescript
public readonly conformActionInput: string;
```

- *Type:* string

---

##### `enforceOnKeyConfigsInput`<sup>Optional</sup> <a name="enforceOnKeyConfigsInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.enforceOnKeyConfigsInput"></a>

```typescript
public readonly enforceOnKeyConfigsInput: IResolvable | ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigs">ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigs</a>[]

---

##### `enforceOnKeyInput`<sup>Optional</sup> <a name="enforceOnKeyInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.enforceOnKeyInput"></a>

```typescript
public readonly enforceOnKeyInput: string;
```

- *Type:* string

---

##### `enforceOnKeyNameInput`<sup>Optional</sup> <a name="enforceOnKeyNameInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.enforceOnKeyNameInput"></a>

```typescript
public readonly enforceOnKeyNameInput: string;
```

- *Type:* string

---

##### `exceedActionInput`<sup>Optional</sup> <a name="exceedActionInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.exceedActionInput"></a>

```typescript
public readonly exceedActionInput: string;
```

- *Type:* string

---

##### `rateLimitThresholdInput`<sup>Optional</sup> <a name="rateLimitThresholdInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.rateLimitThresholdInput"></a>

```typescript
public readonly rateLimitThresholdInput: ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold">ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold</a>

---

##### `banDurationSec`<sup>Required</sup> <a name="banDurationSec" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.banDurationSec"></a>

```typescript
public readonly banDurationSec: number;
```

- *Type:* number

---

##### `conformAction`<sup>Required</sup> <a name="conformAction" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.conformAction"></a>

```typescript
public readonly conformAction: string;
```

- *Type:* string

---

##### `enforceOnKey`<sup>Required</sup> <a name="enforceOnKey" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.enforceOnKey"></a>

```typescript
public readonly enforceOnKey: string;
```

- *Type:* string

---

##### `enforceOnKeyName`<sup>Required</sup> <a name="enforceOnKeyName" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.enforceOnKeyName"></a>

```typescript
public readonly enforceOnKeyName: string;
```

- *Type:* string

---

##### `exceedAction`<sup>Required</sup> <a name="exceedAction" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.exceedAction"></a>

```typescript
public readonly exceedAction: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeRegionSecurityPolicyRulesRateLimitOptions;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptions">ComputeRegionSecurityPolicyRulesRateLimitOptions</a>

---


### ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference <a name="ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.Initializer"></a>

```typescript
import { computeRegionSecurityPolicy } from '@cdktf/provider-google'

new computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.resetCount">resetCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.resetIntervalSec">resetIntervalSec</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCount` <a name="resetCount" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.resetCount"></a>

```typescript
public resetCount(): void
```

##### `resetIntervalSec` <a name="resetIntervalSec" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.resetIntervalSec"></a>

```typescript
public resetIntervalSec(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.property.countInput">countInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.property.intervalSecInput">intervalSecInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.property.intervalSec">intervalSec</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold">ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `countInput`<sup>Optional</sup> <a name="countInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.property.countInput"></a>

```typescript
public readonly countInput: number;
```

- *Type:* number

---

##### `intervalSecInput`<sup>Optional</sup> <a name="intervalSecInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.property.intervalSecInput"></a>

```typescript
public readonly intervalSecInput: number;
```

- *Type:* number

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `intervalSec`<sup>Required</sup> <a name="intervalSec" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.property.intervalSec"></a>

```typescript
public readonly intervalSec: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold">ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold</a>

---


### ComputeRegionSecurityPolicyTimeoutsOutputReference <a name="ComputeRegionSecurityPolicyTimeoutsOutputReference" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.Initializer"></a>

```typescript
import { computeRegionSecurityPolicy } from '@cdktf/provider-google'

new computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeouts">ComputeRegionSecurityPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeRegionSecurityPolicyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeouts">ComputeRegionSecurityPolicyTimeouts</a>

---


### ComputeRegionSecurityPolicyUserDefinedFieldsList <a name="ComputeRegionSecurityPolicyUserDefinedFieldsList" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsList.Initializer"></a>

```typescript
import { computeRegionSecurityPolicy } from '@cdktf/provider-google'

new computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsList.get"></a>

```typescript
public get(index: number): ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFields">ComputeRegionSecurityPolicyUserDefinedFields</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeRegionSecurityPolicyUserDefinedFields[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFields">ComputeRegionSecurityPolicyUserDefinedFields</a>[]

---


### ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference <a name="ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.Initializer"></a>

```typescript
import { computeRegionSecurityPolicy } from '@cdktf/provider-google'

new computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.resetMask">resetMask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.resetOffset">resetOffset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.resetSize">resetSize</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMask` <a name="resetMask" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.resetMask"></a>

```typescript
public resetMask(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetOffset` <a name="resetOffset" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.resetOffset"></a>

```typescript
public resetOffset(): void
```

##### `resetSize` <a name="resetSize" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.resetSize"></a>

```typescript
public resetSize(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.baseInput">baseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.maskInput">maskInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.offsetInput">offsetInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.sizeInput">sizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.base">base</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.mask">mask</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.offset">offset</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.size">size</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFields">ComputeRegionSecurityPolicyUserDefinedFields</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `baseInput`<sup>Optional</sup> <a name="baseInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.baseInput"></a>

```typescript
public readonly baseInput: string;
```

- *Type:* string

---

##### `maskInput`<sup>Optional</sup> <a name="maskInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.maskInput"></a>

```typescript
public readonly maskInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `offsetInput`<sup>Optional</sup> <a name="offsetInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.offsetInput"></a>

```typescript
public readonly offsetInput: number;
```

- *Type:* number

---

##### `sizeInput`<sup>Optional</sup> <a name="sizeInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.sizeInput"></a>

```typescript
public readonly sizeInput: number;
```

- *Type:* number

---

##### `base`<sup>Required</sup> <a name="base" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.base"></a>

```typescript
public readonly base: string;
```

- *Type:* string

---

##### `mask`<sup>Required</sup> <a name="mask" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.mask"></a>

```typescript
public readonly mask: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `offset`<sup>Required</sup> <a name="offset" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.offset"></a>

```typescript
public readonly offset: number;
```

- *Type:* number

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeRegionSecurityPolicyUserDefinedFields;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFields">ComputeRegionSecurityPolicyUserDefinedFields</a>

---



