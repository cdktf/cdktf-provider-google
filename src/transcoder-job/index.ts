/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/transcoder_job
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TranscoderJobConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/transcoder_job#id TranscoderJob#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The labels associated with this job. You can use these to organize and group your jobs.
  * 
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/transcoder_job#labels TranscoderJob#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The location of the transcoding job resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/transcoder_job#location TranscoderJob#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/transcoder_job#project TranscoderJob#project}
  */
  readonly project?: string;
  /**
  * Specify the templateId to use for populating Job.config.
  * The default is preset/web-hd, which is the only supported preset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/transcoder_job#template_id TranscoderJob#template_id}
  */
  readonly templateId?: string;
  /**
  * config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/transcoder_job#config TranscoderJob#config}
  */
  readonly config?: TranscoderJobConfigA;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/transcoder_job#timeouts TranscoderJob#timeouts}
  */
  readonly timeouts?: TranscoderJobTimeouts;
}
export interface TranscoderJobConfigAdBreaks {
  /**
  * Start time in seconds for the ad break, relative to the output file timeline
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/transcoder_job#start_time_offset TranscoderJob#start_time_offset}
  */
  readonly startTimeOffset?: string;
}

export function transcoderJobConfigAdBreaksToTerraform(struct?: TranscoderJobConfigAdBreaks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    start_time_offset: cdktf.stringToTerraform(struct!.startTimeOffset),
  }
}


export function transcoderJobConfigAdBreaksToHclTerraform(struct?: TranscoderJobConfigAdBreaks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    start_time_offset: {
      value: cdktf.stringToHclTerraform(struct!.startTimeOffset),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TranscoderJobConfigAdBreaksOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): TranscoderJobConfigAdBreaks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._startTimeOffset !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTimeOffset = this._startTimeOffset;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TranscoderJobConfigAdBreaks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._startTimeOffset = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._startTimeOffset = value.startTimeOffset;
    }
  }

  // start_time_offset - computed: true, optional: true, required: false
  private _startTimeOffset?: string; 
  public get startTimeOffset() {
    return this.getStringAttribute('start_time_offset');
  }
  public set startTimeOffset(value: string) {
    this._startTimeOffset = value;
  }
  public resetStartTimeOffset() {
    this._startTimeOffset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeOffsetInput() {
    return this._startTimeOffset;
  }
}

export class TranscoderJobConfigAdBreaksList extends cdktf.ComplexList {
  public internalValue? : TranscoderJobConfigAdBreaks[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): TranscoderJobConfigAdBreaksOutputReference {
    return new TranscoderJobConfigAdBreaksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TranscoderJobConfigEditListStruct {
  /**
  * List of values identifying files that should be used in this atom.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/transcoder_job#inputs TranscoderJob#inputs}
  */
  readonly inputs?: string[];
  /**
  * A unique key for this atom.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/transcoder_job#key TranscoderJob#key}
  */
  readonly key?: string;
  /**
  * Start time in seconds for the atom, relative to the input file timeline. The default is '0s'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/transcoder_job#start_time_offset TranscoderJob#start_time_offset}
  */
  readonly startTimeOffset?: string;
}

export function transcoderJobConfigEditListStructToTerraform(struct?: TranscoderJobConfigEditListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inputs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.inputs),
    key: cdktf.stringToTerraform(struct!.key),
    start_time_offset: cdktf.stringToTerraform(struct!.startTimeOffset),
  }
}


export function transcoderJobConfigEditListStructToHclTerraform(struct?: TranscoderJobConfigEditListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inputs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.inputs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_time_offset: {
      value: cdktf.stringToHclTerraform(struct!.startTimeOffset),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TranscoderJobConfigEditListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): TranscoderJobConfigEditListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inputs !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputs = this._inputs;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._startTimeOffset !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTimeOffset = this._startTimeOffset;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TranscoderJobConfigEditListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._inputs = undefined;
      this._key = undefined;
      this._startTimeOffset = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._inputs = value.inputs;
      this._key = value.key;
      this._startTimeOffset = value.startTimeOffset;
    }
  }

  // inputs - computed: true, optional: true, required: false
  private _inputs?: string[]; 
  public get inputs() {
    return this.getListAttribute('inputs');
  }
  public set inputs(value: string[]) {
    this._inputs = value;
  }
  public resetInputs() {
    this._inputs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputsInput() {
    return this._inputs;
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // start_time_offset - computed: true, optional: true, required: false
  private _startTimeOffset?: string; 
  public get startTimeOffset() {
    return this.getStringAttribute('start_time_offset');
  }
  public set startTimeOffset(value: string) {
    this._startTimeOffset = value;
  }
  public resetStartTimeOffset() {
    this._startTimeOffset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeOffsetInput() {
    return this._startTimeOffset;
  }
}

export class TranscoderJobConfigEditListStructList extends cdktf.ComplexList {
  public internalValue? : TranscoderJobConfigEditListStruct[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): TranscoderJobConfigEditListStructOutputReference {
    return new TranscoderJobConfigEditListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TranscoderJobConfigElementaryStreamsAudioStream {
  /**
  * Audio bitrate in bits per second.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/transcoder_job#bitrate_bps TranscoderJob#bitrate_bps}
  */
  readonly bitrateBps: number;
  /**
  * Number of audio channels. The default is '2'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/transcoder_job#channel_count TranscoderJob#channel_count}
  */
  readonly channelCount?: number;
  /**
  * A list of channel names specifying layout of the audio channels. The default is ["fl", "fr"].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/transcoder_job#channel_layout TranscoderJob#channel_layout}
  */
  readonly channelLayout?: string[];
  /**
  * The codec for this audio stream. The default is 'aac'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/transcoder_job#codec TranscoderJob#codec}
  */
  readonly codec?: string;
  /**
  * The audio sample rate in Hertz. The default is '48000'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/transcoder_job#sample_rate_hertz TranscoderJob#sample_rate_hertz}
  */
  readonly sampleRateHertz?: number;
}

export function transcoderJobConfigElementaryStreamsAudioStreamToTerraform(struct?: TranscoderJobConfigElementaryStreamsAudioStreamOutputReference | TranscoderJobConfigElementaryStreamsAudioStream): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bitrate_bps: cdktf.numberToTerraform(struct!.bitrateBps),
    channel_count: cdktf.numberToTerraform(struct!.channelCount),
    channel_layout: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.channelLayout),
    codec: cdktf.stringToTerraform(struct!.codec),
    sample_rate_hertz: cdktf.numberToTerraform(struct!.sampleRateHertz),
  }
}


export function transcoderJobConfigElementaryStreamsAudioStreamToHclTerraform(struct?: TranscoderJobConfigElementaryStreamsAudioStreamOutputReference | TranscoderJobConfigElementaryStreamsAudioStream): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bitrate_bps: {
      value: cdktf.numberToHclTerraform(struct!.bitrateBps),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    channel_count: {
      value: cdktf.numberToHclTerraform(struct!.channelCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    channel_layout: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.channelLayout),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    codec: {
      value: cdktf.stringToHclTerraform(struct!.codec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sample_rate_hertz: {
      value: cdktf.numberToHclTerraform(struct!.sampleRateHertz),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TranscoderJobConfigElementaryStreamsAudioStreamOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TranscoderJobConfigElementaryStreamsAudioStream | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bitrateBps !== undefined) {
      hasAnyValues = true;
      internalValueResult.bitrateBps = this._bitrateBps;
    }
    if (this._channelCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelCount = this._channelCount;
    }
    if (this._channelLayout !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelLayout = this._channelLayout;
    }
    if (this._codec !== undefined) {
      hasAnyValues = true;
      internalValueResult.codec = this._codec;
    }
    if (this._sampleRateHertz !== undefined) {
      hasAnyValues = true;
      internalValueResult.sampleRateHertz = this._sampleRateHertz;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TranscoderJobConfigElementaryStreamsAudioStream | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bitrateBps = undefined;
      this._channelCount = undefined;
      this._channelLayout = undefined;
      this._codec = undefined;
      this._sampleRateHertz = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bitrateBps = value.bitrateBps;
      this._channelCount = value.channelCount;
      this._channelLayout = value.channelLayout;
      this._codec = value.codec;
      this._sampleRateHertz = value.sampleRateHertz;
    }
  }

  // bitrate_bps - computed: false, optional: false, required: true
  private _bitrateBps?: number; 
  public get bitrateBps() {
    return this.getNumberAttribute('bitrate_bps');
  }
  public set bitrateBps(value: number) {
    this._bitrateBps = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bitrateBpsInput() {
    return this._bitrateBps;
  }

  // channel_count - computed: true, optional: true, required: false
  private _channelCount?: number; 
  public get channelCount() {
    return this.getNumberAttribute('channel_count');
  }
  public set channelCount(value: number) {
    this._channelCount = value;
  }
  public resetChannelCount() {
    this._channelCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelCountInput() {
    return this._channelCount;
  }

  // channel_layout - computed: true, optional: true, required: false
  private _channelLayout?: string[]; 
  public get channelLayout() {
    return this.getListAttribute('channel_layout');
  }
  public set channelLayout(value: string[]) {
    this._channelLayout = value;
  }
  public resetChannelLayout() {
    this._channelLayout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelLayoutInput() {
    return this._channelLayout;
  }

  // codec - computed: true, optional: true, required: false
  private _codec?: string; 
  public get codec() {
    return this.getStringAttribute('codec');
  }
  public set codec(value: string) {
    this._codec = value;
  }
  public resetCodec() {
    this._codec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codecInput() {
    return this._codec;
  }

  // sample_rate_hertz - computed: true, optional: true, required: false
  private _sampleRateHertz?: number; 
  public get sampleRateHertz() {
    return this.getNumberAttribute('sample_rate_hertz');
  }
  public set sampleRateHertz(value: number) {
    this._sampleRateHertz = value;
  }
  public resetSampleRateHertz() {
    this._sampleRateHertz = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sampleRateHertzInput() {
    return this._sampleRateHertz;
  }
}
export interface TranscoderJobConfigElementaryStreamsVideoStreamH264Hlg {
}

export function transcoderJobConfigElementaryStreamsVideoStreamH264HlgToTerraform(struct?: TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference | TranscoderJobConfigElementaryStreamsVideoStreamH264Hlg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function transcoderJobConfigElementaryStreamsVideoStreamH264HlgToHclTerraform(struct?: TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference | TranscoderJobConfigElementaryStreamsVideoStreamH264Hlg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TranscoderJobConfigElementaryStreamsVideoStreamH264Hlg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TranscoderJobConfigElementaryStreamsVideoStreamH264Hlg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface TranscoderJobConfigElementaryStreamsVideoStreamH264Sdr {
}

export function transcoderJobConfigElementaryStreamsVideoStreamH264SdrToTerraform(struct?: TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference | TranscoderJobConfigElementaryStreamsVideoStreamH264Sdr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function transcoderJobConfigElementaryStreamsVideoStreamH264SdrToHclTerraform(struct?: TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference | TranscoderJobConfigElementaryStreamsVideoStreamH264Sdr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TranscoderJobConfigElementaryStreamsVideoStreamH264Sdr | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TranscoderJobConfigElementaryStreamsVideoStreamH264Sdr | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface TranscoderJobConfigElementaryStreamsVideoStreamH264 {
  /**
  * The video bitrate in bits per second.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/transcoder_job#bitrate_bps TranscoderJob#bitrate_bps}
  */
  readonly bitrateBps: number;
  /**
  * Target CRF level. The default is '21'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/transcoder_job#crf_level TranscoderJob#crf_level}
  */
  readonly crfLevel?: number;
  /**
  * The entropy coder to use. The default is 'cabac'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/transcoder_job#entropy_coder TranscoderJob#entropy_coder}
  */
  readonly entropyCoder?: string;
  /**
  * The target video frame rate in frames per second (FPS).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/transcoder_job#frame_rate TranscoderJob#frame_rate}
  */
  readonly frameRate: number;
  /**
  * Select the GOP size based on the specified duration. The default is '3s'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/transcoder_job#gop_duration TranscoderJob#gop_duration}
  */
  readonly gopDuration?: string;
  /**
  * The height of the video in pixels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/transcoder_job#height_pixels TranscoderJob#height_pixels}
  */
  readonly heightPixels?: number;
  /**
  * Pixel format to use. The default is 'yuv420p'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/transcoder_job#pixel_format TranscoderJob#pixel_format}
  */
  readonly pixelFormat?: string;
  /**
  * Enforces the specified codec preset. The default is 'veryfast'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/transcoder_job#preset TranscoderJob#preset}
  */
  readonly preset?: string;
  /**
  * Enforces the specified codec profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/transcoder_job#profile TranscoderJob#profile}
  */
  readonly profile?: string;
  /**
  * Specify the mode. The default is 'vbr'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/transcoder_job#rate_control_mode TranscoderJob#rate_control_mode}
  */
  readonly rateControlMode?: string;
  /**
  * Initial fullness of the Video Buffering Verifier (VBV) buffer in bits.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/transcoder_job#vbv_fullness_bits TranscoderJob#vbv_fullness_bits}
  */
  readonly vbvFullnessBits?: number;
  /**
  * Size of the Video Buffering Verifier (VBV) buffer in bits.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/transcoder_job#vbv_size_bits TranscoderJob#vbv_size_bits}
  */
  readonly vbvSizeBits?: number;
  /**
  * The width of the video in pixels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/transcoder_job#width_pixels TranscoderJob#width_pixels}
  */
  readonly widthPixels?: number;
  /**
  * hlg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/transcoder_job#hlg TranscoderJob#hlg}
  */
  readonly hlg?: TranscoderJobConfigElementaryStreamsVideoStreamH264Hlg;
  /**
  * sdr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/transcoder_job#sdr TranscoderJob#sdr}
  */
  readonly sdr?: TranscoderJobConfigElementaryStreamsVideoStreamH264Sdr;
}

export function transcoderJobConfigElementaryStreamsVideoStreamH264ToTerraform(struct?: TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference | TranscoderJobConfigElementaryStreamsVideoStreamH264): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bitrate_bps: cdktf.numberToTerraform(struct!.bitrateBps),
    crf_level: cdktf.numberToTerraform(struct!.crfLevel),
    entropy_coder: cdktf.stringToTerraform(struct!.entropyCoder),
    frame_rate: cdktf.numberToTerraform(struct!.frameRate),
    gop_duration: cdktf.stringToTerraform(struct!.gopDuration),
    height_pixels: cdktf.numberToTerraform(struct!.heightPixels),
    pixel_format: cdktf.stringToTerraform(struct!.pixelFormat),
    preset: cdktf.stringToTerraform(struct!.preset),
    profile: cdktf.stringToTerraform(struct!.profile),
    rate_control_mode: cdktf.stringToTerraform(struct!.rateControlMode),
    vbv_fullness_bits: cdktf.numberToTerraform(struct!.vbvFullnessBits),
    vbv_size_bits: cdktf.numberToTerraform(struct!.vbvSizeBits),
    width_pixels: cdktf.numberToTerraform(struct!.widthPixels),
    hlg: transcoderJobConfigElementaryStreamsVideoStreamH264HlgToTerraform(struct!.hlg),
    sdr: transcoderJobConfigElementaryStreamsVideoStreamH264SdrToTerraform(struct!.sdr),
  }
}


export function transcoderJobConfigElementaryStreamsVideoStreamH264ToHclTerraform(struct?: TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference | TranscoderJobConfigElementaryStreamsVideoStreamH264): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bitrate_bps: {
      value: cdktf.numberToHclTerraform(struct!.bitrateBps),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    crf_level: {
      value: cdktf.numberToHclTerraform(struct!.crfLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    entropy_coder: {
      value: cdktf.stringToHclTerraform(struct!.entropyCoder),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    frame_rate: {
      value: cdktf.numberToHclTerraform(struct!.frameRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gop_duration: {
      value: cdktf.stringToHclTerraform(struct!.gopDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    height_pixels: {
      value: cdktf.numberToHclTerraform(struct!.heightPixels),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pixel_format: {
      value: cdktf.stringToHclTerraform(struct!.pixelFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preset: {
      value: cdktf.stringToHclTerraform(struct!.preset),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    profile: {
      value: cdktf.stringToHclTerraform(struct!.profile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rate_control_mode: {
      value: cdktf.stringToHclTerraform(struct!.rateControlMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vbv_fullness_bits: {
      value: cdktf.numberToHclTerraform(struct!.vbvFullnessBits),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vbv_size_bits: {
      value: cdktf.numberToHclTerraform(struct!.vbvSizeBits),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    width_pixels: {
      value: cdktf.numberToHclTerraform(struct!.widthPixels),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hlg: {
      value: transcoderJobConfigElementaryStreamsVideoStreamH264HlgToHclTerraform(struct!.hlg),
      isBlock: true,
      type: "list",
      storageClassType: "TranscoderJobConfigElementaryStreamsVideoStreamH264HlgList",
    },
    sdr: {
      value: transcoderJobConfigElementaryStreamsVideoStreamH264SdrToHclTerraform(struct!.sdr),
      isBlock: true,
      type: "list",
      storageClassType: "TranscoderJobConfigElementaryStreamsVideoStreamH264SdrList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TranscoderJobConfigElementaryStreamsVideoStreamH264 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bitrateBps !== undefined) {
      hasAnyValues = true;
      internalValueResult.bitrateBps = this._bitrateBps;
    }
    if (this._crfLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.crfLevel = this._crfLevel;
    }
    if (this._entropyCoder !== undefined) {
      hasAnyValues = true;
      internalValueResult.entropyCoder = this._entropyCoder;
    }
    if (this._frameRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.frameRate = this._frameRate;
    }
    if (this._gopDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.gopDuration = this._gopDuration;
    }
    if (this._heightPixels !== undefined) {
      hasAnyValues = true;
      internalValueResult.heightPixels = this._heightPixels;
    }
    if (this._pixelFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.pixelFormat = this._pixelFormat;
    }
    if (this._preset !== undefined) {
      hasAnyValues = true;
      internalValueResult.preset = this._preset;
    }
    if (this._profile !== undefined) {
      hasAnyValues = true;
      internalValueResult.profile = this._profile;
    }
    if (this._rateControlMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateControlMode = this._rateControlMode;
    }
    if (this._vbvFullnessBits !== undefined) {
      hasAnyValues = true;
      internalValueResult.vbvFullnessBits = this._vbvFullnessBits;
    }
    if (this._vbvSizeBits !== undefined) {
      hasAnyValues = true;
      internalValueResult.vbvSizeBits = this._vbvSizeBits;
    }
    if (this._widthPixels !== undefined) {
      hasAnyValues = true;
      internalValueResult.widthPixels = this._widthPixels;
    }
    if (this._hlg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hlg = this._hlg?.internalValue;
    }
    if (this._sdr?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sdr = this._sdr?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TranscoderJobConfigElementaryStreamsVideoStreamH264 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bitrateBps = undefined;
      this._crfLevel = undefined;
      this._entropyCoder = undefined;
      this._frameRate = undefined;
      this._gopDuration = undefined;
      this._heightPixels = undefined;
      this._pixelFormat = undefined;
      this._preset = undefined;
      this._profile = undefined;
      this._rateControlMode = undefined;
      this._vbvFullnessBits = undefined;
      this._vbvSizeBits = undefined;
      this._widthPixels = undefined;
      this._hlg.internalValue = undefined;
      this._sdr.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bitrateBps = value.bitrateBps;
      this._crfLevel = value.crfLevel;
      this._entropyCoder = value.entropyCoder;
      this._frameRate = value.frameRate;
      this._gopDuration = value.gopDuration;
      this._heightPixels = value.heightPixels;
      this._pixelFormat = value.pixelFormat;
      this._preset = value.preset;
      this._profile = value.profile;
      this._rateControlMode = value.rateControlMode;
      this._vbvFullnessBits = value.vbvFullnessBits;
      this._vbvSizeBits = value.vbvSizeBits;
      this._widthPixels = value.widthPixels;
      this._hlg.internalValue = value.hlg;
      this._sdr.internalValue = value.sdr;
    }
  }

  // bitrate_bps - computed: false, optional: false, required: true
  private _bitrateBps?: number; 
  public get bitrateBps() {
    return this.getNumberAttribute('bitrate_bps');
  }
  public set bitrateBps(value: number) {
    this._bitrateBps = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bitrateBpsInput() {
    return this._bitrateBps;
  }

  // crf_level - computed: true, optional: true, required: false
  private _crfLevel?: number; 
  public get crfLevel() {
    return this.getNumberAttribute('crf_level');
  }
  public set crfLevel(value: number) {
    this._crfLevel = value;
  }
  public resetCrfLevel() {
    this._crfLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crfLevelInput() {
    return this._crfLevel;
  }

  // entropy_coder - computed: true, optional: true, required: false
  private _entropyCoder?: string; 
  public get entropyCoder() {
    return this.getStringAttribute('entropy_coder');
  }
  public set entropyCoder(value: string) {
    this._entropyCoder = value;
  }
  public resetEntropyCoder() {
    this._entropyCoder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entropyCoderInput() {
    return this._entropyCoder;
  }

  // frame_rate - computed: false, optional: false, required: true
  private _frameRate?: number; 
  public get frameRate() {
    return this.getNumberAttribute('frame_rate');
  }
  public set frameRate(value: number) {
    this._frameRate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frameRateInput() {
    return this._frameRate;
  }

  // gop_duration - computed: true, optional: true, required: false
  private _gopDuration?: string; 
  public get gopDuration() {
    return this.getStringAttribute('gop_duration');
  }
  public set gopDuration(value: string) {
    this._gopDuration = value;
  }
  public resetGopDuration() {
    this._gopDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gopDurationInput() {
    return this._gopDuration;
  }

  // height_pixels - computed: true, optional: true, required: false
  private _heightPixels?: number; 
  public get heightPixels() {
    return this.getNumberAttribute('height_pixels');
  }
  public set heightPixels(value: number) {
    this._heightPixels = value;
  }
  public resetHeightPixels() {
    this._heightPixels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heightPixelsInput() {
    return this._heightPixels;
  }

  // pixel_format - computed: true, optional: true, required: false
  private _pixelFormat?: string; 
  public get pixelFormat() {
    return this.getStringAttribute('pixel_format');
  }
  public set pixelFormat(value: string) {
    this._pixelFormat = value;
  }
  public resetPixelFormat() {
    this._pixelFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pixelFormatInput() {
    return this._pixelFormat;
  }

  // preset - computed: true, optional: true, required: false
  private _preset?: string; 
  public get preset() {
    return this.getStringAttribute('preset');
  }
  public set preset(value: string) {
    this._preset = value;
  }
  public resetPreset() {
    this._preset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presetInput() {
    return this._preset;
  }

  // profile - computed: true, optional: true, required: false
  private _profile?: string; 
  public get profile() {
    return this.getStringAttribute('profile');
  }
  public set profile(value: string) {
    this._profile = value;
  }
  public resetProfile() {
    this._profile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile;
  }

  // rate_control_mode - computed: true, optional: true, required: false
  private _rateControlMode?: string; 
  public get rateControlMode() {
    return this.getStringAttribute('rate_control_mode');
  }
  public set rateControlMode(value: string) {
    this._rateControlMode = value;
  }
  public resetRateControlMode() {
    this._rateControlMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateControlModeInput() {
    return this._rateControlMode;
  }

  // vbv_fullness_bits - computed: true, optional: true, required: false
  private _vbvFullnessBits?: number; 
  public get vbvFullnessBits() {
    return this.getNumberAttribute('vbv_fullness_bits');
  }
  public set vbvFullnessBits(value: number) {
    this._vbvFullnessBits = value;
  }
  public resetVbvFullnessBits() {
    this._vbvFullnessBits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vbvFullnessBitsInput() {
    return this._vbvFullnessBits;
  }

  // vbv_size_bits - computed: true, optional: true, required: false
  private _vbvSizeBits?: number; 
  public get vbvSizeBits() {
    return this.getNumberAttribute('vbv_size_bits');
  }
  public set vbvSizeBits(value: number) {
    this._vbvSizeBits = value;
  }
  public resetVbvSizeBits() {
    this._vbvSizeBits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vbvSizeBitsInput() {
    return this._vbvSizeBits;
  }

  // width_pixels - computed: true, optional: true, required: false
  private _widthPixels?: number; 
  public get widthPixels() {
    return this.getNumberAttribute('width_pixels');
  }
  public set widthPixels(value: number) {
    this._widthPixels = value;
  }
  public resetWidthPixels() {
    this._widthPixels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widthPixelsInput() {
    return this._widthPixels;
  }

  // hlg - computed: false, optional: true, required: false
  private _hlg = new TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference(this, "hlg");
  public get hlg() {
    return this._hlg;
  }
  public putHlg(value: TranscoderJobConfigElementaryStreamsVideoStreamH264Hlg) {
    this._hlg.internalValue = value;
  }
  public resetHlg() {
    this._hlg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hlgInput() {
    return this._hlg.internalValue;
  }

  // sdr - computed: false, optional: true, required: false
  private _sdr = new TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference(this, "sdr");
  public get sdr() {
    return this._sdr;
  }
  public putSdr(value: TranscoderJobConfigElementaryStreamsVideoStreamH264Sdr) {
    this._sdr.internalValue = value;
  }
  public resetSdr() {
    this._sdr.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdrInput() {
    return this._sdr.internalValue;
  }
}
export interface TranscoderJobConfigElementaryStreamsVideoStream {
  /**
  * h264 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/transcoder_job#h264 TranscoderJob#h264}
  */
  readonly h264?: TranscoderJobConfigElementaryStreamsVideoStreamH264;
}

export function transcoderJobConfigElementaryStreamsVideoStreamToTerraform(struct?: TranscoderJobConfigElementaryStreamsVideoStreamOutputReference | TranscoderJobConfigElementaryStreamsVideoStream): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    h264: transcoderJobConfigElementaryStreamsVideoStreamH264ToTerraform(struct!.h264),
  }
}


export function transcoderJobConfigElementaryStreamsVideoStreamToHclTerraform(struct?: TranscoderJobConfigElementaryStreamsVideoStreamOutputReference | TranscoderJobConfigElementaryStreamsVideoStream): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    h264: {
      value: transcoderJobConfigElementaryStreamsVideoStreamH264ToHclTerraform(struct!.h264),
      isBlock: true,
      type: "list",
      storageClassType: "TranscoderJobConfigElementaryStreamsVideoStreamH264List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TranscoderJobConfigElementaryStreamsVideoStreamOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TranscoderJobConfigElementaryStreamsVideoStream | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._h264?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.h264 = this._h264?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TranscoderJobConfigElementaryStreamsVideoStream | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._h264.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._h264.internalValue = value.h264;
    }
  }

  // h264 - computed: false, optional: true, required: false
  private _h264 = new TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference(this, "h264");
  public get h264() {
    return this._h264;
  }
  public putH264(value: TranscoderJobConfigElementaryStreamsVideoStreamH264) {
    this._h264.internalValue = value;
  }
  public resetH264() {
    this._h264.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get h264Input() {
    return this._h264.internalValue;
  }
}
export interface TranscoderJobConfigElementaryStreams {
  /**
  * A unique key for this atom.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/transcoder_job#key TranscoderJob#key}
  */
  readonly key?: string;
  /**
  * audio_stream block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/transcoder_job#audio_stream TranscoderJob#audio_stream}
  */
  readonly audioStream?: TranscoderJobConfigElementaryStreamsAudioStream;
  /**
  * video_stream block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/transcoder_job#video_stream TranscoderJob#video_stream}
  */
  readonly videoStream?: TranscoderJobConfigElementaryStreamsVideoStream;
}

export function transcoderJobConfigElementaryStreamsToTerraform(struct?: TranscoderJobConfigElementaryStreams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    audio_stream: transcoderJobConfigElementaryStreamsAudioStreamToTerraform(struct!.audioStream),
    video_stream: transcoderJobConfigElementaryStreamsVideoStreamToTerraform(struct!.videoStream),
  }
}


export function transcoderJobConfigElementaryStreamsToHclTerraform(struct?: TranscoderJobConfigElementaryStreams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    audio_stream: {
      value: transcoderJobConfigElementaryStreamsAudioStreamToHclTerraform(struct!.audioStream),
      isBlock: true,
      type: "list",
      storageClassType: "TranscoderJobConfigElementaryStreamsAudioStreamList",
    },
    video_stream: {
      value: transcoderJobConfigElementaryStreamsVideoStreamToHclTerraform(struct!.videoStream),
      isBlock: true,
      type: "list",
      storageClassType: "TranscoderJobConfigElementaryStreamsVideoStreamList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TranscoderJobConfigElementaryStreamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): TranscoderJobConfigElementaryStreams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._audioStream?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.audioStream = this._audioStream?.internalValue;
    }
    if (this._videoStream?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.videoStream = this._videoStream?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TranscoderJobConfigElementaryStreams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._audioStream.internalValue = undefined;
      this._videoStream.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._audioStream.internalValue = value.audioStream;
      this._videoStream.internalValue = value.videoStream;
    }
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // audio_stream - computed: false, optional: true, required: false
  private _audioStream = new TranscoderJobConfigElementaryStreamsAudioStreamOutputReference(this, "audio_stream");
  public get audioStream() {
    return this._audioStream;
  }
  public putAudioStream(value: TranscoderJobConfigElementaryStreamsAudioStream) {
    this._audioStream.internalValue = value;
  }
  public resetAudioStream() {
    this._audioStream.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audioStreamInput() {
    return this._audioStream.internalValue;
  }

  // video_stream - computed: false, optional: true, required: false
  private _videoStream = new TranscoderJobConfigElementaryStreamsVideoStreamOutputReference(this, "video_stream");
  public get videoStream() {
    return this._videoStream;
  }
  public putVideoStream(value: TranscoderJobConfigElementaryStreamsVideoStream) {
    this._videoStream.internalValue = value;
  }
  public resetVideoStream() {
    this._videoStream.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get videoStreamInput() {
    return this._videoStream.internalValue;
  }
}

export class TranscoderJobConfigElementaryStreamsList extends cdktf.ComplexList {
  public internalValue? : TranscoderJobConfigElementaryStreams[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): TranscoderJobConfigElementaryStreamsOutputReference {
    return new TranscoderJobConfigElementaryStreamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TranscoderJobConfigEncryptionsAes128 {
}

export function transcoderJobConfigEncryptionsAes128ToTerraform(struct?: TranscoderJobConfigEncryptionsAes128OutputReference | TranscoderJobConfigEncryptionsAes128): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function transcoderJobConfigEncryptionsAes128ToHclTerraform(struct?: TranscoderJobConfigEncryptionsAes128OutputReference | TranscoderJobConfigEncryptionsAes128): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TranscoderJobConfigEncryptionsAes128OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TranscoderJobConfigEncryptionsAes128 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TranscoderJobConfigEncryptionsAes128 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface TranscoderJobConfigEncryptionsDrmSystemsClearkey {
}

export function transcoderJobConfigEncryptionsDrmSystemsClearkeyToTerraform(struct?: TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference | TranscoderJobConfigEncryptionsDrmSystemsClearkey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function transcoderJobConfigEncryptionsDrmSystemsClearkeyToHclTerraform(struct?: TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference | TranscoderJobConfigEncryptionsDrmSystemsClearkey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TranscoderJobConfigEncryptionsDrmSystemsClearkey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TranscoderJobConfigEncryptionsDrmSystemsClearkey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface TranscoderJobConfigEncryptionsDrmSystemsFairplay {
}

export function transcoderJobConfigEncryptionsDrmSystemsFairplayToTerraform(struct?: TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference | TranscoderJobConfigEncryptionsDrmSystemsFairplay): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function transcoderJobConfigEncryptionsDrmSystemsFairplayToHclTerraform(struct?: TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference | TranscoderJobConfigEncryptionsDrmSystemsFairplay): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TranscoderJobConfigEncryptionsDrmSystemsFairplay | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TranscoderJobConfigEncryptionsDrmSystemsFairplay | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface TranscoderJobConfigEncryptionsDrmSystemsPlayready {
}

export function transcoderJobConfigEncryptionsDrmSystemsPlayreadyToTerraform(struct?: TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference | TranscoderJobConfigEncryptionsDrmSystemsPlayready): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function transcoderJobConfigEncryptionsDrmSystemsPlayreadyToHclTerraform(struct?: TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference | TranscoderJobConfigEncryptionsDrmSystemsPlayready): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TranscoderJobConfigEncryptionsDrmSystemsPlayready | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TranscoderJobConfigEncryptionsDrmSystemsPlayready | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface TranscoderJobConfigEncryptionsDrmSystemsWidevine {
}

export function transcoderJobConfigEncryptionsDrmSystemsWidevineToTerraform(struct?: TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference | TranscoderJobConfigEncryptionsDrmSystemsWidevine): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function transcoderJobConfigEncryptionsDrmSystemsWidevineToHclTerraform(struct?: TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference | TranscoderJobConfigEncryptionsDrmSystemsWidevine): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TranscoderJobConfigEncryptionsDrmSystemsWidevine | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TranscoderJobConfigEncryptionsDrmSystemsWidevine | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface TranscoderJobConfigEncryptionsDrmSystems {
  /**
  * clearkey block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/transcoder_job#clearkey TranscoderJob#clearkey}
  */
  readonly clearkey?: TranscoderJobConfigEncryptionsDrmSystemsClearkey;
  /**
  * fairplay block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/transcoder_job#fairplay TranscoderJob#fairplay}
  */
  readonly fairplay?: TranscoderJobConfigEncryptionsDrmSystemsFairplay;
  /**
  * playready block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/transcoder_job#playready TranscoderJob#playready}
  */
  readonly playready?: TranscoderJobConfigEncryptionsDrmSystemsPlayready;
  /**
  * widevine block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/transcoder_job#widevine TranscoderJob#widevine}
  */
  readonly widevine?: TranscoderJobConfigEncryptionsDrmSystemsWidevine;
}

export function transcoderJobConfigEncryptionsDrmSystemsToTerraform(struct?: TranscoderJobConfigEncryptionsDrmSystemsOutputReference | TranscoderJobConfigEncryptionsDrmSystems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    clearkey: transcoderJobConfigEncryptionsDrmSystemsClearkeyToTerraform(struct!.clearkey),
    fairplay: transcoderJobConfigEncryptionsDrmSystemsFairplayToTerraform(struct!.fairplay),
    playready: transcoderJobConfigEncryptionsDrmSystemsPlayreadyToTerraform(struct!.playready),
    widevine: transcoderJobConfigEncryptionsDrmSystemsWidevineToTerraform(struct!.widevine),
  }
}


export function transcoderJobConfigEncryptionsDrmSystemsToHclTerraform(struct?: TranscoderJobConfigEncryptionsDrmSystemsOutputReference | TranscoderJobConfigEncryptionsDrmSystems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    clearkey: {
      value: transcoderJobConfigEncryptionsDrmSystemsClearkeyToHclTerraform(struct!.clearkey),
      isBlock: true,
      type: "list",
      storageClassType: "TranscoderJobConfigEncryptionsDrmSystemsClearkeyList",
    },
    fairplay: {
      value: transcoderJobConfigEncryptionsDrmSystemsFairplayToHclTerraform(struct!.fairplay),
      isBlock: true,
      type: "list",
      storageClassType: "TranscoderJobConfigEncryptionsDrmSystemsFairplayList",
    },
    playready: {
      value: transcoderJobConfigEncryptionsDrmSystemsPlayreadyToHclTerraform(struct!.playready),
      isBlock: true,
      type: "list",
      storageClassType: "TranscoderJobConfigEncryptionsDrmSystemsPlayreadyList",
    },
    widevine: {
      value: transcoderJobConfigEncryptionsDrmSystemsWidevineToHclTerraform(struct!.widevine),
      isBlock: true,
      type: "list",
      storageClassType: "TranscoderJobConfigEncryptionsDrmSystemsWidevineList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TranscoderJobConfigEncryptionsDrmSystemsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TranscoderJobConfigEncryptionsDrmSystems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clearkey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearkey = this._clearkey?.internalValue;
    }
    if (this._fairplay?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fairplay = this._fairplay?.internalValue;
    }
    if (this._playready?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.playready = this._playready?.internalValue;
    }
    if (this._widevine?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.widevine = this._widevine?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TranscoderJobConfigEncryptionsDrmSystems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clearkey.internalValue = undefined;
      this._fairplay.internalValue = undefined;
      this._playready.internalValue = undefined;
      this._widevine.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clearkey.internalValue = value.clearkey;
      this._fairplay.internalValue = value.fairplay;
      this._playready.internalValue = value.playready;
      this._widevine.internalValue = value.widevine;
    }
  }

  // clearkey - computed: false, optional: true, required: false
  private _clearkey = new TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference(this, "clearkey");
  public get clearkey() {
    return this._clearkey;
  }
  public putClearkey(value: TranscoderJobConfigEncryptionsDrmSystemsClearkey) {
    this._clearkey.internalValue = value;
  }
  public resetClearkey() {
    this._clearkey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearkeyInput() {
    return this._clearkey.internalValue;
  }

  // fairplay - computed: false, optional: true, required: false
  private _fairplay = new TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference(this, "fairplay");
  public get fairplay() {
    return this._fairplay;
  }
  public putFairplay(value: TranscoderJobConfigEncryptionsDrmSystemsFairplay) {
    this._fairplay.internalValue = value;
  }
  public resetFairplay() {
    this._fairplay.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fairplayInput() {
    return this._fairplay.internalValue;
  }

  // playready - computed: false, optional: true, required: false
  private _playready = new TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference(this, "playready");
  public get playready() {
    return this._playready;
  }
  public putPlayready(value: TranscoderJobConfigEncryptionsDrmSystemsPlayready) {
    this._playready.internalValue = value;
  }
  public resetPlayready() {
    this._playready.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get playreadyInput() {
    return this._playready.internalValue;
  }

  // widevine - computed: false, optional: true, required: false
  private _widevine = new TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference(this, "widevine");
  public get widevine() {
    return this._widevine;
  }
  public putWidevine(value: TranscoderJobConfigEncryptionsDrmSystemsWidevine) {
    this._widevine.internalValue = value;
  }
  public resetWidevine() {
    this._widevine.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widevineInput() {
    return this._widevine.internalValue;
  }
}
export interface TranscoderJobConfigEncryptionsMpegCenc {
  /**
  * Specify the encryption scheme.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/transcoder_job#scheme TranscoderJob#scheme}
  */
  readonly scheme: string;
}

export function transcoderJobConfigEncryptionsMpegCencToTerraform(struct?: TranscoderJobConfigEncryptionsMpegCencOutputReference | TranscoderJobConfigEncryptionsMpegCenc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scheme: cdktf.stringToTerraform(struct!.scheme),
  }
}


export function transcoderJobConfigEncryptionsMpegCencToHclTerraform(struct?: TranscoderJobConfigEncryptionsMpegCencOutputReference | TranscoderJobConfigEncryptionsMpegCenc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scheme: {
      value: cdktf.stringToHclTerraform(struct!.scheme),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TranscoderJobConfigEncryptionsMpegCencOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TranscoderJobConfigEncryptionsMpegCenc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheme = this._scheme;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TranscoderJobConfigEncryptionsMpegCenc | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._scheme = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._scheme = value.scheme;
    }
  }

  // scheme - computed: false, optional: false, required: true
  private _scheme?: string; 
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
  public set scheme(value: string) {
    this._scheme = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeInput() {
    return this._scheme;
  }
}
export interface TranscoderJobConfigEncryptionsSampleAes {
}

export function transcoderJobConfigEncryptionsSampleAesToTerraform(struct?: TranscoderJobConfigEncryptionsSampleAesOutputReference | TranscoderJobConfigEncryptionsSampleAes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function transcoderJobConfigEncryptionsSampleAesToHclTerraform(struct?: TranscoderJobConfigEncryptionsSampleAesOutputReference | TranscoderJobConfigEncryptionsSampleAes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TranscoderJobConfigEncryptionsSampleAesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TranscoderJobConfigEncryptionsSampleAes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TranscoderJobConfigEncryptionsSampleAes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface TranscoderJobConfigEncryptionsSecretManagerKeySource {
  /**
  * The name of the Secret Version containing the encryption key in the following format: projects/{project}/secrets/{secret_id}/versions/{version_number}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/transcoder_job#secret_version TranscoderJob#secret_version}
  */
  readonly secretVersion: string;
}

export function transcoderJobConfigEncryptionsSecretManagerKeySourceToTerraform(struct?: TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference | TranscoderJobConfigEncryptionsSecretManagerKeySource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_version: cdktf.stringToTerraform(struct!.secretVersion),
  }
}


export function transcoderJobConfigEncryptionsSecretManagerKeySourceToHclTerraform(struct?: TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference | TranscoderJobConfigEncryptionsSecretManagerKeySource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_version: {
      value: cdktf.stringToHclTerraform(struct!.secretVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TranscoderJobConfigEncryptionsSecretManagerKeySource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretVersion = this._secretVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TranscoderJobConfigEncryptionsSecretManagerKeySource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secretVersion = value.secretVersion;
    }
  }

  // secret_version - computed: false, optional: false, required: true
  private _secretVersion?: string; 
  public get secretVersion() {
    return this.getStringAttribute('secret_version');
  }
  public set secretVersion(value: string) {
    this._secretVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretVersionInput() {
    return this._secretVersion;
  }
}
export interface TranscoderJobConfigEncryptions {
  /**
  * Identifier for this set of encryption options.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/transcoder_job#id TranscoderJob#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * aes128 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/transcoder_job#aes128 TranscoderJob#aes128}
  */
  readonly aes128?: TranscoderJobConfigEncryptionsAes128;
  /**
  * drm_systems block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/transcoder_job#drm_systems TranscoderJob#drm_systems}
  */
  readonly drmSystems?: TranscoderJobConfigEncryptionsDrmSystems;
  /**
  * mpeg_cenc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/transcoder_job#mpeg_cenc TranscoderJob#mpeg_cenc}
  */
  readonly mpegCenc?: TranscoderJobConfigEncryptionsMpegCenc;
  /**
  * sample_aes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/transcoder_job#sample_aes TranscoderJob#sample_aes}
  */
  readonly sampleAes?: TranscoderJobConfigEncryptionsSampleAes;
  /**
  * secret_manager_key_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/transcoder_job#secret_manager_key_source TranscoderJob#secret_manager_key_source}
  */
  readonly secretManagerKeySource?: TranscoderJobConfigEncryptionsSecretManagerKeySource;
}

export function transcoderJobConfigEncryptionsToTerraform(struct?: TranscoderJobConfigEncryptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    aes128: transcoderJobConfigEncryptionsAes128ToTerraform(struct!.aes128),
    drm_systems: transcoderJobConfigEncryptionsDrmSystemsToTerraform(struct!.drmSystems),
    mpeg_cenc: transcoderJobConfigEncryptionsMpegCencToTerraform(struct!.mpegCenc),
    sample_aes: transcoderJobConfigEncryptionsSampleAesToTerraform(struct!.sampleAes),
    secret_manager_key_source: transcoderJobConfigEncryptionsSecretManagerKeySourceToTerraform(struct!.secretManagerKeySource),
  }
}


export function transcoderJobConfigEncryptionsToHclTerraform(struct?: TranscoderJobConfigEncryptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aes128: {
      value: transcoderJobConfigEncryptionsAes128ToHclTerraform(struct!.aes128),
      isBlock: true,
      type: "list",
      storageClassType: "TranscoderJobConfigEncryptionsAes128List",
    },
    drm_systems: {
      value: transcoderJobConfigEncryptionsDrmSystemsToHclTerraform(struct!.drmSystems),
      isBlock: true,
      type: "list",
      storageClassType: "TranscoderJobConfigEncryptionsDrmSystemsList",
    },
    mpeg_cenc: {
      value: transcoderJobConfigEncryptionsMpegCencToHclTerraform(struct!.mpegCenc),
      isBlock: true,
      type: "list",
      storageClassType: "TranscoderJobConfigEncryptionsMpegCencList",
    },
    sample_aes: {
      value: transcoderJobConfigEncryptionsSampleAesToHclTerraform(struct!.sampleAes),
      isBlock: true,
      type: "list",
      storageClassType: "TranscoderJobConfigEncryptionsSampleAesList",
    },
    secret_manager_key_source: {
      value: transcoderJobConfigEncryptionsSecretManagerKeySourceToHclTerraform(struct!.secretManagerKeySource),
      isBlock: true,
      type: "list",
      storageClassType: "TranscoderJobConfigEncryptionsSecretManagerKeySourceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TranscoderJobConfigEncryptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): TranscoderJobConfigEncryptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._aes128?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aes128 = this._aes128?.internalValue;
    }
    if (this._drmSystems?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.drmSystems = this._drmSystems?.internalValue;
    }
    if (this._mpegCenc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mpegCenc = this._mpegCenc?.internalValue;
    }
    if (this._sampleAes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sampleAes = this._sampleAes?.internalValue;
    }
    if (this._secretManagerKeySource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretManagerKeySource = this._secretManagerKeySource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TranscoderJobConfigEncryptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._aes128.internalValue = undefined;
      this._drmSystems.internalValue = undefined;
      this._mpegCenc.internalValue = undefined;
      this._sampleAes.internalValue = undefined;
      this._secretManagerKeySource.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._aes128.internalValue = value.aes128;
      this._drmSystems.internalValue = value.drmSystems;
      this._mpegCenc.internalValue = value.mpegCenc;
      this._sampleAes.internalValue = value.sampleAes;
      this._secretManagerKeySource.internalValue = value.secretManagerKeySource;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // aes128 - computed: false, optional: true, required: false
  private _aes128 = new TranscoderJobConfigEncryptionsAes128OutputReference(this, "aes128");
  public get aes128() {
    return this._aes128;
  }
  public putAes128(value: TranscoderJobConfigEncryptionsAes128) {
    this._aes128.internalValue = value;
  }
  public resetAes128() {
    this._aes128.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aes128Input() {
    return this._aes128.internalValue;
  }

  // drm_systems - computed: false, optional: true, required: false
  private _drmSystems = new TranscoderJobConfigEncryptionsDrmSystemsOutputReference(this, "drm_systems");
  public get drmSystems() {
    return this._drmSystems;
  }
  public putDrmSystems(value: TranscoderJobConfigEncryptionsDrmSystems) {
    this._drmSystems.internalValue = value;
  }
  public resetDrmSystems() {
    this._drmSystems.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drmSystemsInput() {
    return this._drmSystems.internalValue;
  }

  // mpeg_cenc - computed: false, optional: true, required: false
  private _mpegCenc = new TranscoderJobConfigEncryptionsMpegCencOutputReference(this, "mpeg_cenc");
  public get mpegCenc() {
    return this._mpegCenc;
  }
  public putMpegCenc(value: TranscoderJobConfigEncryptionsMpegCenc) {
    this._mpegCenc.internalValue = value;
  }
  public resetMpegCenc() {
    this._mpegCenc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mpegCencInput() {
    return this._mpegCenc.internalValue;
  }

  // sample_aes - computed: false, optional: true, required: false
  private _sampleAes = new TranscoderJobConfigEncryptionsSampleAesOutputReference(this, "sample_aes");
  public get sampleAes() {
    return this._sampleAes;
  }
  public putSampleAes(value: TranscoderJobConfigEncryptionsSampleAes) {
    this._sampleAes.internalValue = value;
  }
  public resetSampleAes() {
    this._sampleAes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sampleAesInput() {
    return this._sampleAes.internalValue;
  }

  // secret_manager_key_source - computed: false, optional: true, required: false
  private _secretManagerKeySource = new TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference(this, "secret_manager_key_source");
  public get secretManagerKeySource() {
    return this._secretManagerKeySource;
  }
  public putSecretManagerKeySource(value: TranscoderJobConfigEncryptionsSecretManagerKeySource) {
    this._secretManagerKeySource.internalValue = value;
  }
  public resetSecretManagerKeySource() {
    this._secretManagerKeySource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretManagerKeySourceInput() {
    return this._secretManagerKeySource.internalValue;
  }
}

export class TranscoderJobConfigEncryptionsList extends cdktf.ComplexList {
  public internalValue? : TranscoderJobConfigEncryptions[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): TranscoderJobConfigEncryptionsOutputReference {
    return new TranscoderJobConfigEncryptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TranscoderJobConfigInputs {
  /**
  * A unique key for this input. Must be specified when using advanced mapping and edit lists.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/transcoder_job#key TranscoderJob#key}
  */
  readonly key?: string;
  /**
  * URI of the media. Input files must be at least 5 seconds in duration and stored in Cloud Storage (for example, gs://bucket/inputs/file.mp4).
  * If empty, the value is populated from Job.input_uri.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/transcoder_job#uri TranscoderJob#uri}
  */
  readonly uri?: string;
}

export function transcoderJobConfigInputsToTerraform(struct?: TranscoderJobConfigInputs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    uri: cdktf.stringToTerraform(struct!.uri),
  }
}


export function transcoderJobConfigInputsToHclTerraform(struct?: TranscoderJobConfigInputs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uri: {
      value: cdktf.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TranscoderJobConfigInputsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): TranscoderJobConfigInputs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TranscoderJobConfigInputs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._uri = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._uri = value.uri;
    }
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // uri - computed: true, optional: true, required: false
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  public resetUri() {
    this._uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }
}

export class TranscoderJobConfigInputsList extends cdktf.ComplexList {
  public internalValue? : TranscoderJobConfigInputs[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): TranscoderJobConfigInputsOutputReference {
    return new TranscoderJobConfigInputsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TranscoderJobConfigManifests {
  /**
  * The name of the generated file. The default is 'manifest'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/transcoder_job#file_name TranscoderJob#file_name}
  */
  readonly fileName?: string;
  /**
  * List of user supplied MuxStream.key values that should appear in this manifest.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/transcoder_job#mux_streams TranscoderJob#mux_streams}
  */
  readonly muxStreams?: string[];
  /**
  * Type of the manifest. Possible values: ["MANIFEST_TYPE_UNSPECIFIED", "HLS", "DASH"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/transcoder_job#type TranscoderJob#type}
  */
  readonly type?: string;
}

export function transcoderJobConfigManifestsToTerraform(struct?: TranscoderJobConfigManifests | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file_name: cdktf.stringToTerraform(struct!.fileName),
    mux_streams: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.muxStreams),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function transcoderJobConfigManifestsToHclTerraform(struct?: TranscoderJobConfigManifests | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file_name: {
      value: cdktf.stringToHclTerraform(struct!.fileName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mux_streams: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.muxStreams),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TranscoderJobConfigManifestsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): TranscoderJobConfigManifests | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileName = this._fileName;
    }
    if (this._muxStreams !== undefined) {
      hasAnyValues = true;
      internalValueResult.muxStreams = this._muxStreams;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TranscoderJobConfigManifests | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fileName = undefined;
      this._muxStreams = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fileName = value.fileName;
      this._muxStreams = value.muxStreams;
      this._type = value.type;
    }
  }

  // file_name - computed: true, optional: true, required: false
  private _fileName?: string; 
  public get fileName() {
    return this.getStringAttribute('file_name');
  }
  public set fileName(value: string) {
    this._fileName = value;
  }
  public resetFileName() {
    this._fileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileNameInput() {
    return this._fileName;
  }

  // mux_streams - computed: true, optional: true, required: false
  private _muxStreams?: string[]; 
  public get muxStreams() {
    return this.getListAttribute('mux_streams');
  }
  public set muxStreams(value: string[]) {
    this._muxStreams = value;
  }
  public resetMuxStreams() {
    this._muxStreams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get muxStreamsInput() {
    return this._muxStreams;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class TranscoderJobConfigManifestsList extends cdktf.ComplexList {
  public internalValue? : TranscoderJobConfigManifests[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): TranscoderJobConfigManifestsOutputReference {
    return new TranscoderJobConfigManifestsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TranscoderJobConfigMuxStreamsSegmentSettings {
  /**
  * Duration of the segments in seconds. The default is '6.0s'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/transcoder_job#segment_duration TranscoderJob#segment_duration}
  */
  readonly segmentDuration?: string;
}

export function transcoderJobConfigMuxStreamsSegmentSettingsToTerraform(struct?: TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference | TranscoderJobConfigMuxStreamsSegmentSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    segment_duration: cdktf.stringToTerraform(struct!.segmentDuration),
  }
}


export function transcoderJobConfigMuxStreamsSegmentSettingsToHclTerraform(struct?: TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference | TranscoderJobConfigMuxStreamsSegmentSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    segment_duration: {
      value: cdktf.stringToHclTerraform(struct!.segmentDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TranscoderJobConfigMuxStreamsSegmentSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._segmentDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.segmentDuration = this._segmentDuration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TranscoderJobConfigMuxStreamsSegmentSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._segmentDuration = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._segmentDuration = value.segmentDuration;
    }
  }

  // segment_duration - computed: true, optional: true, required: false
  private _segmentDuration?: string; 
  public get segmentDuration() {
    return this.getStringAttribute('segment_duration');
  }
  public set segmentDuration(value: string) {
    this._segmentDuration = value;
  }
  public resetSegmentDuration() {
    this._segmentDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentDurationInput() {
    return this._segmentDuration;
  }
}
export interface TranscoderJobConfigMuxStreams {
  /**
  * The container format. The default is 'mp4'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/transcoder_job#container TranscoderJob#container}
  */
  readonly container?: string;
  /**
  * List of ElementaryStream.key values multiplexed in this stream.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/transcoder_job#elementary_streams TranscoderJob#elementary_streams}
  */
  readonly elementaryStreams?: string[];
  /**
  * Identifier of the encryption configuration to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/transcoder_job#encryption_id TranscoderJob#encryption_id}
  */
  readonly encryptionId?: string;
  /**
  * The name of the generated file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/transcoder_job#file_name TranscoderJob#file_name}
  */
  readonly fileName?: string;
  /**
  * A unique key for this multiplexed stream.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/transcoder_job#key TranscoderJob#key}
  */
  readonly key?: string;
  /**
  * segment_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/transcoder_job#segment_settings TranscoderJob#segment_settings}
  */
  readonly segmentSettings?: TranscoderJobConfigMuxStreamsSegmentSettings;
}

export function transcoderJobConfigMuxStreamsToTerraform(struct?: TranscoderJobConfigMuxStreams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container: cdktf.stringToTerraform(struct!.container),
    elementary_streams: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.elementaryStreams),
    encryption_id: cdktf.stringToTerraform(struct!.encryptionId),
    file_name: cdktf.stringToTerraform(struct!.fileName),
    key: cdktf.stringToTerraform(struct!.key),
    segment_settings: transcoderJobConfigMuxStreamsSegmentSettingsToTerraform(struct!.segmentSettings),
  }
}


export function transcoderJobConfigMuxStreamsToHclTerraform(struct?: TranscoderJobConfigMuxStreams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container: {
      value: cdktf.stringToHclTerraform(struct!.container),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    elementary_streams: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.elementaryStreams),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    encryption_id: {
      value: cdktf.stringToHclTerraform(struct!.encryptionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_name: {
      value: cdktf.stringToHclTerraform(struct!.fileName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    segment_settings: {
      value: transcoderJobConfigMuxStreamsSegmentSettingsToHclTerraform(struct!.segmentSettings),
      isBlock: true,
      type: "list",
      storageClassType: "TranscoderJobConfigMuxStreamsSegmentSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TranscoderJobConfigMuxStreamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): TranscoderJobConfigMuxStreams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._container !== undefined) {
      hasAnyValues = true;
      internalValueResult.container = this._container;
    }
    if (this._elementaryStreams !== undefined) {
      hasAnyValues = true;
      internalValueResult.elementaryStreams = this._elementaryStreams;
    }
    if (this._encryptionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionId = this._encryptionId;
    }
    if (this._fileName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileName = this._fileName;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._segmentSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.segmentSettings = this._segmentSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TranscoderJobConfigMuxStreams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._container = undefined;
      this._elementaryStreams = undefined;
      this._encryptionId = undefined;
      this._fileName = undefined;
      this._key = undefined;
      this._segmentSettings.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._container = value.container;
      this._elementaryStreams = value.elementaryStreams;
      this._encryptionId = value.encryptionId;
      this._fileName = value.fileName;
      this._key = value.key;
      this._segmentSettings.internalValue = value.segmentSettings;
    }
  }

  // container - computed: true, optional: true, required: false
  private _container?: string; 
  public get container() {
    return this.getStringAttribute('container');
  }
  public set container(value: string) {
    this._container = value;
  }
  public resetContainer() {
    this._container = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container;
  }

  // elementary_streams - computed: true, optional: true, required: false
  private _elementaryStreams?: string[]; 
  public get elementaryStreams() {
    return this.getListAttribute('elementary_streams');
  }
  public set elementaryStreams(value: string[]) {
    this._elementaryStreams = value;
  }
  public resetElementaryStreams() {
    this._elementaryStreams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elementaryStreamsInput() {
    return this._elementaryStreams;
  }

  // encryption_id - computed: true, optional: true, required: false
  private _encryptionId?: string; 
  public get encryptionId() {
    return this.getStringAttribute('encryption_id');
  }
  public set encryptionId(value: string) {
    this._encryptionId = value;
  }
  public resetEncryptionId() {
    this._encryptionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionIdInput() {
    return this._encryptionId;
  }

  // file_name - computed: true, optional: true, required: false
  private _fileName?: string; 
  public get fileName() {
    return this.getStringAttribute('file_name');
  }
  public set fileName(value: string) {
    this._fileName = value;
  }
  public resetFileName() {
    this._fileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileNameInput() {
    return this._fileName;
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // segment_settings - computed: false, optional: true, required: false
  private _segmentSettings = new TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference(this, "segment_settings");
  public get segmentSettings() {
    return this._segmentSettings;
  }
  public putSegmentSettings(value: TranscoderJobConfigMuxStreamsSegmentSettings) {
    this._segmentSettings.internalValue = value;
  }
  public resetSegmentSettings() {
    this._segmentSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentSettingsInput() {
    return this._segmentSettings.internalValue;
  }
}

export class TranscoderJobConfigMuxStreamsList extends cdktf.ComplexList {
  public internalValue? : TranscoderJobConfigMuxStreams[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): TranscoderJobConfigMuxStreamsOutputReference {
    return new TranscoderJobConfigMuxStreamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TranscoderJobConfigOutput {
  /**
  * URI for the output file(s). For example, gs://my-bucket/outputs/.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/transcoder_job#uri TranscoderJob#uri}
  */
  readonly uri?: string;
}

export function transcoderJobConfigOutputToTerraform(struct?: TranscoderJobConfigOutputOutputReference | TranscoderJobConfigOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uri: cdktf.stringToTerraform(struct!.uri),
  }
}


export function transcoderJobConfigOutputToHclTerraform(struct?: TranscoderJobConfigOutputOutputReference | TranscoderJobConfigOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uri: {
      value: cdktf.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TranscoderJobConfigOutputOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TranscoderJobConfigOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TranscoderJobConfigOutput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uri = value.uri;
    }
  }

  // uri - computed: true, optional: true, required: false
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  public resetUri() {
    this._uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }
}
export interface TranscoderJobConfigOverlaysAnimationsAnimationFadeXy {
  /**
  * Normalized x coordinate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/transcoder_job#x TranscoderJob#x}
  */
  readonly x?: number;
  /**
  * Normalized y coordinate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/transcoder_job#y TranscoderJob#y}
  */
  readonly y?: number;
}

export function transcoderJobConfigOverlaysAnimationsAnimationFadeXyToTerraform(struct?: TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference | TranscoderJobConfigOverlaysAnimationsAnimationFadeXy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    x: cdktf.numberToTerraform(struct!.x),
    y: cdktf.numberToTerraform(struct!.y),
  }
}


export function transcoderJobConfigOverlaysAnimationsAnimationFadeXyToHclTerraform(struct?: TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference | TranscoderJobConfigOverlaysAnimationsAnimationFadeXy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    x: {
      value: cdktf.numberToHclTerraform(struct!.x),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    y: {
      value: cdktf.numberToHclTerraform(struct!.y),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TranscoderJobConfigOverlaysAnimationsAnimationFadeXy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._x !== undefined) {
      hasAnyValues = true;
      internalValueResult.x = this._x;
    }
    if (this._y !== undefined) {
      hasAnyValues = true;
      internalValueResult.y = this._y;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TranscoderJobConfigOverlaysAnimationsAnimationFadeXy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._x = undefined;
      this._y = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._x = value.x;
      this._y = value.y;
    }
  }

  // x - computed: true, optional: true, required: false
  private _x?: number; 
  public get x() {
    return this.getNumberAttribute('x');
  }
  public set x(value: number) {
    this._x = value;
  }
  public resetX() {
    this._x = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xInput() {
    return this._x;
  }

  // y - computed: true, optional: true, required: false
  private _y?: number; 
  public get y() {
    return this.getNumberAttribute('y');
  }
  public set y(value: number) {
    this._y = value;
  }
  public resetY() {
    this._y = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yInput() {
    return this._y;
  }
}
export interface TranscoderJobConfigOverlaysAnimationsAnimationFade {
  /**
  * The time to end the fade animation, in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/transcoder_job#end_time_offset TranscoderJob#end_time_offset}
  */
  readonly endTimeOffset?: string;
  /**
  * Required. Type of fade animation: 'FADE_IN' or 'FADE_OUT'.
  * The possible values are:
  * 
  * * 'FADE_TYPE_UNSPECIFIED': The fade type is not specified.
  * 
  * * 'FADE_IN': Fade the overlay object into view.
  * 
  * * 'FADE_OUT': Fade the overlay object out of view. Possible values: ["FADE_TYPE_UNSPECIFIED", "FADE_IN", "FADE_OUT"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/transcoder_job#fade_type TranscoderJob#fade_type}
  */
  readonly fadeType: string;
  /**
  * The time to start the fade animation, in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/transcoder_job#start_time_offset TranscoderJob#start_time_offset}
  */
  readonly startTimeOffset?: string;
  /**
  * xy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/transcoder_job#xy TranscoderJob#xy}
  */
  readonly xy?: TranscoderJobConfigOverlaysAnimationsAnimationFadeXy;
}

export function transcoderJobConfigOverlaysAnimationsAnimationFadeToTerraform(struct?: TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference | TranscoderJobConfigOverlaysAnimationsAnimationFade): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_time_offset: cdktf.stringToTerraform(struct!.endTimeOffset),
    fade_type: cdktf.stringToTerraform(struct!.fadeType),
    start_time_offset: cdktf.stringToTerraform(struct!.startTimeOffset),
    xy: transcoderJobConfigOverlaysAnimationsAnimationFadeXyToTerraform(struct!.xy),
  }
}


export function transcoderJobConfigOverlaysAnimationsAnimationFadeToHclTerraform(struct?: TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference | TranscoderJobConfigOverlaysAnimationsAnimationFade): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_time_offset: {
      value: cdktf.stringToHclTerraform(struct!.endTimeOffset),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fade_type: {
      value: cdktf.stringToHclTerraform(struct!.fadeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_time_offset: {
      value: cdktf.stringToHclTerraform(struct!.startTimeOffset),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    xy: {
      value: transcoderJobConfigOverlaysAnimationsAnimationFadeXyToHclTerraform(struct!.xy),
      isBlock: true,
      type: "list",
      storageClassType: "TranscoderJobConfigOverlaysAnimationsAnimationFadeXyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TranscoderJobConfigOverlaysAnimationsAnimationFade | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endTimeOffset !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTimeOffset = this._endTimeOffset;
    }
    if (this._fadeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fadeType = this._fadeType;
    }
    if (this._startTimeOffset !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTimeOffset = this._startTimeOffset;
    }
    if (this._xy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.xy = this._xy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TranscoderJobConfigOverlaysAnimationsAnimationFade | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._endTimeOffset = undefined;
      this._fadeType = undefined;
      this._startTimeOffset = undefined;
      this._xy.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._endTimeOffset = value.endTimeOffset;
      this._fadeType = value.fadeType;
      this._startTimeOffset = value.startTimeOffset;
      this._xy.internalValue = value.xy;
    }
  }

  // end_time_offset - computed: true, optional: true, required: false
  private _endTimeOffset?: string; 
  public get endTimeOffset() {
    return this.getStringAttribute('end_time_offset');
  }
  public set endTimeOffset(value: string) {
    this._endTimeOffset = value;
  }
  public resetEndTimeOffset() {
    this._endTimeOffset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeOffsetInput() {
    return this._endTimeOffset;
  }

  // fade_type - computed: false, optional: false, required: true
  private _fadeType?: string; 
  public get fadeType() {
    return this.getStringAttribute('fade_type');
  }
  public set fadeType(value: string) {
    this._fadeType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fadeTypeInput() {
    return this._fadeType;
  }

  // start_time_offset - computed: true, optional: true, required: false
  private _startTimeOffset?: string; 
  public get startTimeOffset() {
    return this.getStringAttribute('start_time_offset');
  }
  public set startTimeOffset(value: string) {
    this._startTimeOffset = value;
  }
  public resetStartTimeOffset() {
    this._startTimeOffset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeOffsetInput() {
    return this._startTimeOffset;
  }

  // xy - computed: false, optional: true, required: false
  private _xy = new TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference(this, "xy");
  public get xy() {
    return this._xy;
  }
  public putXy(value: TranscoderJobConfigOverlaysAnimationsAnimationFadeXy) {
    this._xy.internalValue = value;
  }
  public resetXy() {
    this._xy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xyInput() {
    return this._xy.internalValue;
  }
}
export interface TranscoderJobConfigOverlaysAnimations {
  /**
  * animation_fade block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/transcoder_job#animation_fade TranscoderJob#animation_fade}
  */
  readonly animationFade?: TranscoderJobConfigOverlaysAnimationsAnimationFade;
}

export function transcoderJobConfigOverlaysAnimationsToTerraform(struct?: TranscoderJobConfigOverlaysAnimations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    animation_fade: transcoderJobConfigOverlaysAnimationsAnimationFadeToTerraform(struct!.animationFade),
  }
}


export function transcoderJobConfigOverlaysAnimationsToHclTerraform(struct?: TranscoderJobConfigOverlaysAnimations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    animation_fade: {
      value: transcoderJobConfigOverlaysAnimationsAnimationFadeToHclTerraform(struct!.animationFade),
      isBlock: true,
      type: "list",
      storageClassType: "TranscoderJobConfigOverlaysAnimationsAnimationFadeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TranscoderJobConfigOverlaysAnimationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): TranscoderJobConfigOverlaysAnimations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._animationFade?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.animationFade = this._animationFade?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TranscoderJobConfigOverlaysAnimations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._animationFade.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._animationFade.internalValue = value.animationFade;
    }
  }

  // animation_fade - computed: false, optional: true, required: false
  private _animationFade = new TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference(this, "animation_fade");
  public get animationFade() {
    return this._animationFade;
  }
  public putAnimationFade(value: TranscoderJobConfigOverlaysAnimationsAnimationFade) {
    this._animationFade.internalValue = value;
  }
  public resetAnimationFade() {
    this._animationFade.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get animationFadeInput() {
    return this._animationFade.internalValue;
  }
}

export class TranscoderJobConfigOverlaysAnimationsList extends cdktf.ComplexList {
  public internalValue? : TranscoderJobConfigOverlaysAnimations[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): TranscoderJobConfigOverlaysAnimationsOutputReference {
    return new TranscoderJobConfigOverlaysAnimationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TranscoderJobConfigOverlaysImage {
  /**
  * URI of the image in Cloud Storage. For example, gs://bucket/inputs/image.png.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/transcoder_job#uri TranscoderJob#uri}
  */
  readonly uri: string;
}

export function transcoderJobConfigOverlaysImageToTerraform(struct?: TranscoderJobConfigOverlaysImageOutputReference | TranscoderJobConfigOverlaysImage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uri: cdktf.stringToTerraform(struct!.uri),
  }
}


export function transcoderJobConfigOverlaysImageToHclTerraform(struct?: TranscoderJobConfigOverlaysImageOutputReference | TranscoderJobConfigOverlaysImage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uri: {
      value: cdktf.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TranscoderJobConfigOverlaysImageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TranscoderJobConfigOverlaysImage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TranscoderJobConfigOverlaysImage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uri = value.uri;
    }
  }

  // uri - computed: false, optional: false, required: true
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }
}
export interface TranscoderJobConfigOverlays {
  /**
  * animations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/transcoder_job#animations TranscoderJob#animations}
  */
  readonly animations?: TranscoderJobConfigOverlaysAnimations[] | cdktf.IResolvable;
  /**
  * image block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/transcoder_job#image TranscoderJob#image}
  */
  readonly image?: TranscoderJobConfigOverlaysImage;
}

export function transcoderJobConfigOverlaysToTerraform(struct?: TranscoderJobConfigOverlays | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    animations: cdktf.listMapper(transcoderJobConfigOverlaysAnimationsToTerraform, true)(struct!.animations),
    image: transcoderJobConfigOverlaysImageToTerraform(struct!.image),
  }
}


export function transcoderJobConfigOverlaysToHclTerraform(struct?: TranscoderJobConfigOverlays | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    animations: {
      value: cdktf.listMapperHcl(transcoderJobConfigOverlaysAnimationsToHclTerraform, true)(struct!.animations),
      isBlock: true,
      type: "list",
      storageClassType: "TranscoderJobConfigOverlaysAnimationsList",
    },
    image: {
      value: transcoderJobConfigOverlaysImageToHclTerraform(struct!.image),
      isBlock: true,
      type: "list",
      storageClassType: "TranscoderJobConfigOverlaysImageList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TranscoderJobConfigOverlaysOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): TranscoderJobConfigOverlays | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._animations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.animations = this._animations?.internalValue;
    }
    if (this._image?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TranscoderJobConfigOverlays | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._animations.internalValue = undefined;
      this._image.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._animations.internalValue = value.animations;
      this._image.internalValue = value.image;
    }
  }

  // animations - computed: false, optional: true, required: false
  private _animations = new TranscoderJobConfigOverlaysAnimationsList(this, "animations", false);
  public get animations() {
    return this._animations;
  }
  public putAnimations(value: TranscoderJobConfigOverlaysAnimations[] | cdktf.IResolvable) {
    this._animations.internalValue = value;
  }
  public resetAnimations() {
    this._animations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get animationsInput() {
    return this._animations.internalValue;
  }

  // image - computed: false, optional: true, required: false
  private _image = new TranscoderJobConfigOverlaysImageOutputReference(this, "image");
  public get image() {
    return this._image;
  }
  public putImage(value: TranscoderJobConfigOverlaysImage) {
    this._image.internalValue = value;
  }
  public resetImage() {
    this._image.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image.internalValue;
  }
}

export class TranscoderJobConfigOverlaysList extends cdktf.ComplexList {
  public internalValue? : TranscoderJobConfigOverlays[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): TranscoderJobConfigOverlaysOutputReference {
    return new TranscoderJobConfigOverlaysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TranscoderJobConfigPubsubDestination {
  /**
  * The name of the Pub/Sub topic to publish job completion notification to. For example: projects/{project}/topics/{topic}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/transcoder_job#topic TranscoderJob#topic}
  */
  readonly topic?: string;
}

export function transcoderJobConfigPubsubDestinationToTerraform(struct?: TranscoderJobConfigPubsubDestinationOutputReference | TranscoderJobConfigPubsubDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    topic: cdktf.stringToTerraform(struct!.topic),
  }
}


export function transcoderJobConfigPubsubDestinationToHclTerraform(struct?: TranscoderJobConfigPubsubDestinationOutputReference | TranscoderJobConfigPubsubDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    topic: {
      value: cdktf.stringToHclTerraform(struct!.topic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TranscoderJobConfigPubsubDestinationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TranscoderJobConfigPubsubDestination | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._topic !== undefined) {
      hasAnyValues = true;
      internalValueResult.topic = this._topic;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TranscoderJobConfigPubsubDestination | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._topic = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._topic = value.topic;
    }
  }

  // topic - computed: false, optional: true, required: false
  private _topic?: string; 
  public get topic() {
    return this.getStringAttribute('topic');
  }
  public set topic(value: string) {
    this._topic = value;
  }
  public resetTopic() {
    this._topic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicInput() {
    return this._topic;
  }
}
export interface TranscoderJobConfigA {
  /**
  * ad_breaks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/transcoder_job#ad_breaks TranscoderJob#ad_breaks}
  */
  readonly adBreaks?: TranscoderJobConfigAdBreaks[] | cdktf.IResolvable;
  /**
  * edit_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/transcoder_job#edit_list TranscoderJob#edit_list}
  */
  readonly editList?: TranscoderJobConfigEditListStruct[] | cdktf.IResolvable;
  /**
  * elementary_streams block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/transcoder_job#elementary_streams TranscoderJob#elementary_streams}
  */
  readonly elementaryStreams?: TranscoderJobConfigElementaryStreams[] | cdktf.IResolvable;
  /**
  * encryptions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/transcoder_job#encryptions TranscoderJob#encryptions}
  */
  readonly encryptions?: TranscoderJobConfigEncryptions[] | cdktf.IResolvable;
  /**
  * inputs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/transcoder_job#inputs TranscoderJob#inputs}
  */
  readonly inputs?: TranscoderJobConfigInputs[] | cdktf.IResolvable;
  /**
  * manifests block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/transcoder_job#manifests TranscoderJob#manifests}
  */
  readonly manifests?: TranscoderJobConfigManifests[] | cdktf.IResolvable;
  /**
  * mux_streams block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/transcoder_job#mux_streams TranscoderJob#mux_streams}
  */
  readonly muxStreams?: TranscoderJobConfigMuxStreams[] | cdktf.IResolvable;
  /**
  * output block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/transcoder_job#output TranscoderJob#output}
  */
  readonly output?: TranscoderJobConfigOutput;
  /**
  * overlays block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/transcoder_job#overlays TranscoderJob#overlays}
  */
  readonly overlays?: TranscoderJobConfigOverlays[] | cdktf.IResolvable;
  /**
  * pubsub_destination block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/transcoder_job#pubsub_destination TranscoderJob#pubsub_destination}
  */
  readonly pubsubDestination?: TranscoderJobConfigPubsubDestination;
}

export function transcoderJobConfigAToTerraform(struct?: TranscoderJobConfigAOutputReference | TranscoderJobConfigA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ad_breaks: cdktf.listMapper(transcoderJobConfigAdBreaksToTerraform, true)(struct!.adBreaks),
    edit_list: cdktf.listMapper(transcoderJobConfigEditListStructToTerraform, true)(struct!.editList),
    elementary_streams: cdktf.listMapper(transcoderJobConfigElementaryStreamsToTerraform, true)(struct!.elementaryStreams),
    encryptions: cdktf.listMapper(transcoderJobConfigEncryptionsToTerraform, true)(struct!.encryptions),
    inputs: cdktf.listMapper(transcoderJobConfigInputsToTerraform, true)(struct!.inputs),
    manifests: cdktf.listMapper(transcoderJobConfigManifestsToTerraform, true)(struct!.manifests),
    mux_streams: cdktf.listMapper(transcoderJobConfigMuxStreamsToTerraform, true)(struct!.muxStreams),
    output: transcoderJobConfigOutputToTerraform(struct!.output),
    overlays: cdktf.listMapper(transcoderJobConfigOverlaysToTerraform, true)(struct!.overlays),
    pubsub_destination: transcoderJobConfigPubsubDestinationToTerraform(struct!.pubsubDestination),
  }
}


export function transcoderJobConfigAToHclTerraform(struct?: TranscoderJobConfigAOutputReference | TranscoderJobConfigA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ad_breaks: {
      value: cdktf.listMapperHcl(transcoderJobConfigAdBreaksToHclTerraform, true)(struct!.adBreaks),
      isBlock: true,
      type: "list",
      storageClassType: "TranscoderJobConfigAdBreaksList",
    },
    edit_list: {
      value: cdktf.listMapperHcl(transcoderJobConfigEditListStructToHclTerraform, true)(struct!.editList),
      isBlock: true,
      type: "list",
      storageClassType: "TranscoderJobConfigEditListStructList",
    },
    elementary_streams: {
      value: cdktf.listMapperHcl(transcoderJobConfigElementaryStreamsToHclTerraform, true)(struct!.elementaryStreams),
      isBlock: true,
      type: "list",
      storageClassType: "TranscoderJobConfigElementaryStreamsList",
    },
    encryptions: {
      value: cdktf.listMapperHcl(transcoderJobConfigEncryptionsToHclTerraform, true)(struct!.encryptions),
      isBlock: true,
      type: "list",
      storageClassType: "TranscoderJobConfigEncryptionsList",
    },
    inputs: {
      value: cdktf.listMapperHcl(transcoderJobConfigInputsToHclTerraform, true)(struct!.inputs),
      isBlock: true,
      type: "list",
      storageClassType: "TranscoderJobConfigInputsList",
    },
    manifests: {
      value: cdktf.listMapperHcl(transcoderJobConfigManifestsToHclTerraform, true)(struct!.manifests),
      isBlock: true,
      type: "list",
      storageClassType: "TranscoderJobConfigManifestsList",
    },
    mux_streams: {
      value: cdktf.listMapperHcl(transcoderJobConfigMuxStreamsToHclTerraform, true)(struct!.muxStreams),
      isBlock: true,
      type: "list",
      storageClassType: "TranscoderJobConfigMuxStreamsList",
    },
    output: {
      value: transcoderJobConfigOutputToHclTerraform(struct!.output),
      isBlock: true,
      type: "list",
      storageClassType: "TranscoderJobConfigOutputList",
    },
    overlays: {
      value: cdktf.listMapperHcl(transcoderJobConfigOverlaysToHclTerraform, true)(struct!.overlays),
      isBlock: true,
      type: "list",
      storageClassType: "TranscoderJobConfigOverlaysList",
    },
    pubsub_destination: {
      value: transcoderJobConfigPubsubDestinationToHclTerraform(struct!.pubsubDestination),
      isBlock: true,
      type: "list",
      storageClassType: "TranscoderJobConfigPubsubDestinationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TranscoderJobConfigAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TranscoderJobConfigA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adBreaks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.adBreaks = this._adBreaks?.internalValue;
    }
    if (this._editList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.editList = this._editList?.internalValue;
    }
    if (this._elementaryStreams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.elementaryStreams = this._elementaryStreams?.internalValue;
    }
    if (this._encryptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptions = this._encryptions?.internalValue;
    }
    if (this._inputs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputs = this._inputs?.internalValue;
    }
    if (this._manifests?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.manifests = this._manifests?.internalValue;
    }
    if (this._muxStreams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.muxStreams = this._muxStreams?.internalValue;
    }
    if (this._output?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.output = this._output?.internalValue;
    }
    if (this._overlays?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.overlays = this._overlays?.internalValue;
    }
    if (this._pubsubDestination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pubsubDestination = this._pubsubDestination?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TranscoderJobConfigA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._adBreaks.internalValue = undefined;
      this._editList.internalValue = undefined;
      this._elementaryStreams.internalValue = undefined;
      this._encryptions.internalValue = undefined;
      this._inputs.internalValue = undefined;
      this._manifests.internalValue = undefined;
      this._muxStreams.internalValue = undefined;
      this._output.internalValue = undefined;
      this._overlays.internalValue = undefined;
      this._pubsubDestination.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._adBreaks.internalValue = value.adBreaks;
      this._editList.internalValue = value.editList;
      this._elementaryStreams.internalValue = value.elementaryStreams;
      this._encryptions.internalValue = value.encryptions;
      this._inputs.internalValue = value.inputs;
      this._manifests.internalValue = value.manifests;
      this._muxStreams.internalValue = value.muxStreams;
      this._output.internalValue = value.output;
      this._overlays.internalValue = value.overlays;
      this._pubsubDestination.internalValue = value.pubsubDestination;
    }
  }

  // ad_breaks - computed: false, optional: true, required: false
  private _adBreaks = new TranscoderJobConfigAdBreaksList(this, "ad_breaks", false);
  public get adBreaks() {
    return this._adBreaks;
  }
  public putAdBreaks(value: TranscoderJobConfigAdBreaks[] | cdktf.IResolvable) {
    this._adBreaks.internalValue = value;
  }
  public resetAdBreaks() {
    this._adBreaks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adBreaksInput() {
    return this._adBreaks.internalValue;
  }

  // edit_list - computed: false, optional: true, required: false
  private _editList = new TranscoderJobConfigEditListStructList(this, "edit_list", false);
  public get editList() {
    return this._editList;
  }
  public putEditList(value: TranscoderJobConfigEditListStruct[] | cdktf.IResolvable) {
    this._editList.internalValue = value;
  }
  public resetEditList() {
    this._editList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get editListInput() {
    return this._editList.internalValue;
  }

  // elementary_streams - computed: false, optional: true, required: false
  private _elementaryStreams = new TranscoderJobConfigElementaryStreamsList(this, "elementary_streams", false);
  public get elementaryStreams() {
    return this._elementaryStreams;
  }
  public putElementaryStreams(value: TranscoderJobConfigElementaryStreams[] | cdktf.IResolvable) {
    this._elementaryStreams.internalValue = value;
  }
  public resetElementaryStreams() {
    this._elementaryStreams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elementaryStreamsInput() {
    return this._elementaryStreams.internalValue;
  }

  // encryptions - computed: false, optional: true, required: false
  private _encryptions = new TranscoderJobConfigEncryptionsList(this, "encryptions", false);
  public get encryptions() {
    return this._encryptions;
  }
  public putEncryptions(value: TranscoderJobConfigEncryptions[] | cdktf.IResolvable) {
    this._encryptions.internalValue = value;
  }
  public resetEncryptions() {
    this._encryptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionsInput() {
    return this._encryptions.internalValue;
  }

  // inputs - computed: false, optional: true, required: false
  private _inputs = new TranscoderJobConfigInputsList(this, "inputs", false);
  public get inputs() {
    return this._inputs;
  }
  public putInputs(value: TranscoderJobConfigInputs[] | cdktf.IResolvable) {
    this._inputs.internalValue = value;
  }
  public resetInputs() {
    this._inputs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputsInput() {
    return this._inputs.internalValue;
  }

  // manifests - computed: false, optional: true, required: false
  private _manifests = new TranscoderJobConfigManifestsList(this, "manifests", false);
  public get manifests() {
    return this._manifests;
  }
  public putManifests(value: TranscoderJobConfigManifests[] | cdktf.IResolvable) {
    this._manifests.internalValue = value;
  }
  public resetManifests() {
    this._manifests.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manifestsInput() {
    return this._manifests.internalValue;
  }

  // mux_streams - computed: false, optional: true, required: false
  private _muxStreams = new TranscoderJobConfigMuxStreamsList(this, "mux_streams", false);
  public get muxStreams() {
    return this._muxStreams;
  }
  public putMuxStreams(value: TranscoderJobConfigMuxStreams[] | cdktf.IResolvable) {
    this._muxStreams.internalValue = value;
  }
  public resetMuxStreams() {
    this._muxStreams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get muxStreamsInput() {
    return this._muxStreams.internalValue;
  }

  // output - computed: false, optional: true, required: false
  private _output = new TranscoderJobConfigOutputOutputReference(this, "output");
  public get output() {
    return this._output;
  }
  public putOutput(value: TranscoderJobConfigOutput) {
    this._output.internalValue = value;
  }
  public resetOutput() {
    this._output.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputInput() {
    return this._output.internalValue;
  }

  // overlays - computed: false, optional: true, required: false
  private _overlays = new TranscoderJobConfigOverlaysList(this, "overlays", false);
  public get overlays() {
    return this._overlays;
  }
  public putOverlays(value: TranscoderJobConfigOverlays[] | cdktf.IResolvable) {
    this._overlays.internalValue = value;
  }
  public resetOverlays() {
    this._overlays.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overlaysInput() {
    return this._overlays.internalValue;
  }

  // pubsub_destination - computed: false, optional: true, required: false
  private _pubsubDestination = new TranscoderJobConfigPubsubDestinationOutputReference(this, "pubsub_destination");
  public get pubsubDestination() {
    return this._pubsubDestination;
  }
  public putPubsubDestination(value: TranscoderJobConfigPubsubDestination) {
    this._pubsubDestination.internalValue = value;
  }
  public resetPubsubDestination() {
    this._pubsubDestination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pubsubDestinationInput() {
    return this._pubsubDestination.internalValue;
  }
}
export interface TranscoderJobTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/transcoder_job#create TranscoderJob#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/transcoder_job#delete TranscoderJob#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/transcoder_job#update TranscoderJob#update}
  */
  readonly update?: string;
}

export function transcoderJobTimeoutsToTerraform(struct?: TranscoderJobTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function transcoderJobTimeoutsToHclTerraform(struct?: TranscoderJobTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TranscoderJobTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TranscoderJobTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TranscoderJobTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/transcoder_job google_transcoder_job}
*/
export class TranscoderJob extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_transcoder_job";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TranscoderJob resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TranscoderJob to import
  * @param importFromId The id of the existing TranscoderJob that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/transcoder_job#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TranscoderJob to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_transcoder_job", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/transcoder_job google_transcoder_job} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TranscoderJobConfig
  */
  public constructor(scope: Construct, id: string, config: TranscoderJobConfig) {
    super(scope, id, {
      terraformResourceType: 'google_transcoder_job',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.34.1',
        providerVersionConstraint: '~> 6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._labels = config.labels;
    this._location = config.location;
    this._project = config.project;
    this._templateId = config.templateId;
    this._config.internalValue = config.config;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // effective_labels - computed: true, optional: false, required: false
  private _effectiveLabels = new cdktf.StringMap(this, "effective_labels");
  public get effectiveLabels() {
    return this._effectiveLabels;
  }

  // end_time - computed: true, optional: false, required: false
  public get endTime() {
    return this.getStringAttribute('end_time');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // project - computed: true, optional: true, required: false
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getStringAttribute('start_time');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // template_id - computed: true, optional: true, required: false
  private _templateId?: string; 
  public get templateId() {
    return this.getStringAttribute('template_id');
  }
  public set templateId(value: string) {
    this._templateId = value;
  }
  public resetTemplateId() {
    this._templateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateIdInput() {
    return this._templateId;
  }

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktf.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // config - computed: false, optional: true, required: false
  private _config = new TranscoderJobConfigAOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: TranscoderJobConfigA) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new TranscoderJobTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: TranscoderJobTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      location: cdktf.stringToTerraform(this._location),
      project: cdktf.stringToTerraform(this._project),
      template_id: cdktf.stringToTerraform(this._templateId),
      config: transcoderJobConfigAToTerraform(this._config.internalValue),
      timeouts: transcoderJobTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_id: {
        value: cdktf.stringToHclTerraform(this._templateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config: {
        value: transcoderJobConfigAToHclTerraform(this._config.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TranscoderJobConfigAList",
      },
      timeouts: {
        value: transcoderJobTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "TranscoderJobTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
