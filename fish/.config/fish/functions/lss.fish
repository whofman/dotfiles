# Defined in - @ line 1
function lss --description 'alias lss ls -lart | sort -k9,9'
	ls -lart | sort -k9,9 $argv;
end
