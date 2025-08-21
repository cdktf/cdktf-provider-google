# `computeRegionNetworkFirewallPolicyAssociation` Submodule <a name="`computeRegionNetworkFirewallPolicyAssociation` Submodule" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeRegionNetworkFirewallPolicyAssociation <a name="ComputeRegionNetworkFirewallPolicyAssociation" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/compute_region_network_firewall_policy_association google_compute_region_network_firewall_policy_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.Initializer"></a>

```typescript
import { computeRegionNetworkFirewallPolicyAssociation } from '@cdktf/provider-google'

new computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation(scope: Construct, id: string, config: ComputeRegionNetworkFirewallPolicyAssociationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationConfig">ComputeRegionNetworkFirewallPolicyAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationConfig">ComputeRegionNetworkFirewallPolicyAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.putTimeouts"></a>

```typescript
public putTimeouts(value: ComputeRegionNetworkFirewallPolicyAssociationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeouts">ComputeRegionNetworkFirewallPolicyAssociationTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ComputeRegionNetworkFirewallPolicyAssociation resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.isConstruct"></a>

```typescript
import { computeRegionNetworkFirewallPolicyAssociation } from '@cdktf/provider-google'

computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.isTerraformElement"></a>

```typescript
import { computeRegionNetworkFirewallPolicyAssociation } from '@cdktf/provider-google'

computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.isTerraformResource"></a>

```typescript
import { computeRegionNetworkFirewallPolicyAssociation } from '@cdktf/provider-google'

computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.generateConfigForImport"></a>

```typescript
import { computeRegionNetworkFirewallPolicyAssociation } from '@cdktf/provider-google'

computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ComputeRegionNetworkFirewallPolicyAssociation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ComputeRegionNetworkFirewallPolicyAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ComputeRegionNetworkFirewallPolicyAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/compute_region_network_firewall_policy_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ComputeRegionNetworkFirewallPolicyAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.shortName">shortName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference">ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.attachmentTargetInput">attachmentTargetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.firewallPolicyInput">firewallPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeouts">ComputeRegionNetworkFirewallPolicyAssociationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.attachmentTarget">attachmentTarget</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.firewallPolicy">firewallPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `shortName`<sup>Required</sup> <a name="shortName" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.shortName"></a>

```typescript
public readonly shortName: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.timeouts"></a>

```typescript
public readonly timeouts: ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference">ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference</a>

---

##### `attachmentTargetInput`<sup>Optional</sup> <a name="attachmentTargetInput" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.attachmentTargetInput"></a>

```typescript
public readonly attachmentTargetInput: string;
```

- *Type:* string

---

##### `firewallPolicyInput`<sup>Optional</sup> <a name="firewallPolicyInput" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.firewallPolicyInput"></a>

```typescript
public readonly firewallPolicyInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ComputeRegionNetworkFirewallPolicyAssociationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeouts">ComputeRegionNetworkFirewallPolicyAssociationTimeouts</a>

---

##### `attachmentTarget`<sup>Required</sup> <a name="attachmentTarget" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.attachmentTarget"></a>

```typescript
public readonly attachmentTarget: string;
```

- *Type:* string

---

##### `firewallPolicy`<sup>Required</sup> <a name="firewallPolicy" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.firewallPolicy"></a>

```typescript
public readonly firewallPolicy: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeRegionNetworkFirewallPolicyAssociationConfig <a name="ComputeRegionNetworkFirewallPolicyAssociationConfig" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationConfig.Initializer"></a>

```typescript
import { computeRegionNetworkFirewallPolicyAssociation } from '@cdktf/provider-google'

const computeRegionNetworkFirewallPolicyAssociationConfig: computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationConfig.property.attachmentTarget">attachmentTarget</a></code> | <code>string</code> | The target that the firewall policy is attached to. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationConfig.property.firewallPolicy">firewallPolicy</a></code> | <code>string</code> | The firewall policy of the resource. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationConfig.property.name">name</a></code> | <code>string</code> | The name for an association. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/compute_region_network_firewall_policy_association#id ComputeRegionNetworkFirewallPolicyAssociation#id}. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/compute_region_network_firewall_policy_association#project ComputeRegionNetworkFirewallPolicyAssociation#project}. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationConfig.property.region">region</a></code> | <code>string</code> | The location of this resource. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeouts">ComputeRegionNetworkFirewallPolicyAssociationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `attachmentTarget`<sup>Required</sup> <a name="attachmentTarget" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationConfig.property.attachmentTarget"></a>

```typescript
public readonly attachmentTarget: string;
```

- *Type:* string

The target that the firewall policy is attached to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/compute_region_network_firewall_policy_association#attachment_target ComputeRegionNetworkFirewallPolicyAssociation#attachment_target}

---

##### `firewallPolicy`<sup>Required</sup> <a name="firewallPolicy" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationConfig.property.firewallPolicy"></a>

```typescript
public readonly firewallPolicy: string;
```

- *Type:* string

The firewall policy of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/compute_region_network_firewall_policy_association#firewall_policy ComputeRegionNetworkFirewallPolicyAssociation#firewall_policy}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name for an association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/compute_region_network_firewall_policy_association#name ComputeRegionNetworkFirewallPolicyAssociation#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/compute_region_network_firewall_policy_association#id ComputeRegionNetworkFirewallPolicyAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/compute_region_network_firewall_policy_association#project ComputeRegionNetworkFirewallPolicyAssociation#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The location of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/compute_region_network_firewall_policy_association#region ComputeRegionNetworkFirewallPolicyAssociation#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ComputeRegionNetworkFirewallPolicyAssociationTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeouts">ComputeRegionNetworkFirewallPolicyAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/compute_region_network_firewall_policy_association#timeouts ComputeRegionNetworkFirewallPolicyAssociation#timeouts}

---

### ComputeRegionNetworkFirewallPolicyAssociationTimeouts <a name="ComputeRegionNetworkFirewallPolicyAssociationTimeouts" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeouts.Initializer"></a>

```typescript
import { computeRegionNetworkFirewallPolicyAssociation } from '@cdktf/provider-google'

const computeRegionNetworkFirewallPolicyAssociationTimeouts: computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/compute_region_network_firewall_policy_association#create ComputeRegionNetworkFirewallPolicyAssociation#create}. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/compute_region_network_firewall_policy_association#delete ComputeRegionNetworkFirewallPolicyAssociation#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/compute_region_network_firewall_policy_association#create ComputeRegionNetworkFirewallPolicyAssociation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/compute_region_network_firewall_policy_association#delete ComputeRegionNetworkFirewallPolicyAssociation#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference <a name="ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.Initializer"></a>

```typescript
import { computeRegionNetworkFirewallPolicyAssociation } from '@cdktf/provider-google'

new computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeouts">ComputeRegionNetworkFirewallPolicyAssociationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeRegionNetworkFirewallPolicyAssociationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyAssociation.ComputeRegionNetworkFirewallPolicyAssociationTimeouts">ComputeRegionNetworkFirewallPolicyAssociationTimeouts</a>

---



